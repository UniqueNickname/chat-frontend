type touchedType = {
  [key : string] : boolean | undefined
}
type errorsType = {
  [key : string] : string | undefined
}

export default ( key : string, touched : touchedType, errors : errorsType ) => {
  if ( touched[key] ) 
    return errors[key] ? "error" : "success"
  else return ""
}