import axios from "axios"

const stack = 'frontend'
const levels = ["debug","info","warn","error","fatal"]
const packages = ["api","component","hook","page","state","style"]

function isValid(lvl,pkg){
    return levels.includes(lvl) && packages.includes(pkg)
}

async function log(lvl,pkg,message){
    if(!isValid(lvl,pkg)){
        console.error("Invalid Log Level or Package",{lvl,pkg})
        return
    }
    const payload = {stack,lvl,package:pkg,message}
    try {
    const res = await axios.post(
      'http://20.244.56.144/evaluation-service/logs',payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    )
    console.log('Sent:', res.data)
  } catch (error) {
    console.error('Failed:', error.response?.data || error.message)
  }
}
export {log}