// Define where to fetch the providers from. Multiple sources can be provided.
const providerSources = [
  "https://oembed.com/providers.json"
],
filePath = "src/endpoints-regexp.json"

const axios = require('axios'), fs = require('fs')

function escapeRegExp(string) {
  return string.replace(/[/.*+?^${}()|[\]\\]/g, '\\$&')
}

function generateSchemeRegExp(scheme){
  var schemeUrl = new URL(scheme),
  schemeRegExpUrl = {}
  customProtocol = false

  //Scheme protocol regExp to allow both http:// and https://
  if(schemeUrl.protocol == "http:" || schemeUrl.protocol == "https:"){
    schemeRegExpUrl.protocol = "^http(?:s)?:"
  }
  else{
    customProtocol = true
    schemeRegExpUrl.protocol = schemeUrl.protocol
  }



  //Check if host allows www and non-www
  if(schemeUrl.host.startsWith("*.")){
    schemeRegExpUrl.host = "(?:[-\\w]+\\.)?" + escapeRegExp(schemeUrl.host.slice(2))
  }
  else{
    schemeRegExpUrl.host = schemeUrl.host
  }

  //Prepare Path (/path/to/an/url), Search (?param=xyz), and Hash (#user=1) RegExp
  schemeRegExpUrl.pathname = escapeRegExp(schemeUrl.pathname).split("\\\*").join(".+")
  schemeRegExpUrl.search = escapeRegExp(schemeUrl.search).split("\\\*").join(".+")
  schemeRegExpUrl.hash = escapeRegExp(schemeUrl.hash).split("\\\*").join(".+")

  schemeRegExpUrlString = schemeRegExpUrl.protocol+(customProtocol ? "" : "\\/\\/")+schemeRegExpUrl.host+schemeRegExpUrl.pathname+schemeRegExpUrl.search+schemeRegExpUrl.hash

  return schemeRegExpUrlString
}

async function getProviders(providerSource){
  console.log(`Retrieving oEmbed providers form url: ${providerSource}`)
  return new Promise(resolve => {
    // Getting endpoints from url
    axios.get(providerSource)
    .then((response) => {
      const providers = response.data

      var regExpEndpoints = {}

      // For every provider
      for (var provider_key = 0; provider_key < providers.length; provider_key++) {
        const provider = providers[provider_key]

        // For every endpoint (normally every provider has one endpoint)
        for (var endpoint_key = 0; endpoint_key < provider.endpoints.length; endpoint_key++) {
          const endpoint = provider.endpoints[endpoint_key]
          var regExpEndpoint = []

          if(endpoint.schemes != undefined){
            // For every scheme (URL that supports oEmbed)
            for (var scheme_key = 0; scheme_key < endpoint.schemes.length; scheme_key++) {
              const scheme = endpoint.schemes[scheme_key]
              regExpEndpoint.push(generateSchemeRegExp(scheme))
            }
          }

          else{
            //Some providers do not specify schemes. Therefore a regExp for the whole property (Domain name) gets specified
            //Copy variable instead of reference
            var scheme = provider.provider_url.slice(0)

            if(!scheme.endsWith("/")){
              scheme = scheme + "/"
            }
            scheme = scheme + "*"
            regExpEndpoint.push(generateSchemeRegExp(scheme))
          }

          //Modifications to the endpoint (oembed) url
          var endpointUrl = endpoint.url
          //Format Placeholder => json
          endpointUrl = endpointUrl.replace("{format}", "json")

          var endpointUrlObject = new URL(endpointUrl)
          if(endpointUrlObject.host.startsWith("*.")){
            endpointUrl = endpointUrl.replace("*", "www")
          }

          regExpEndpoints[endpointUrl] = regExpEndpoint
        }
      }

      resolve(regExpEndpoints)

    })
    .catch((error) => {
      console.log("Error: " + error)
    })
  })
}

// Starts the script
async function runScript(){

  var allProviders = {}

  //Fetch from all provider sources
  for (var i = 0; i < providerSources.length; i++) {
    var providers = await getProviders(providerSources[i])

    //Add to list of all Providers
    allProviders = {...JSON.parse(JSON.stringify(allProviders)), ...JSON.parse(JSON.stringify(providers))}
  }

  console.log(`Processed ${Object.keys(allProviders).length} oEmbed providers.`)

  var fileContent = JSON.stringify(allProviders, null, 2)

  fs.writeFile(filePath, fileContent, (error) => {
    if(error){
      return console.log("Error: "+error)
    }

    fs.realpath(filePath, (error, realFilePath) => {
      console.log(`Providers stored in File: ${realFilePath}\n`)
    })
  })
}


//Let's go!
runScript()
