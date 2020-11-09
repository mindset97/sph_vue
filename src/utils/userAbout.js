import { v4 as uuidv4 } from 'uuid';

export function getUserTempId(){
  //第一步：从localStorage当中获取临时用户标识userTempId  如果有就直接使用，没有再创建新的（这个标识一般不变）
  let userTempId = localStorage.getItem('USERTEMPID_KEY')
  if(!userTempId){
    userTempId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    localStorage.setItem('USERTEMPID_KEY',userTempId)
  }
  return userTempId
}
