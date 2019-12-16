export default function wgetify( request ){
  if(request.get("method") != "GET") {
    return
  }

  let curlified = []
  let headers = request.get("headers")

  curlified.push( "wget" )
  if ( headers && headers.size ) {
    for( let p of request.get("headers").entries() ){
      let [ h,v ] = p
      curlified.push( "--header " )
      curlified.push( `"${h}: ${v}"` )
    }
  }
  curlified.push( `"${request.get("url")}"`)

  return curlified.join( " " )
}
