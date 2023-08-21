import bcrypt from 'bcrypt'

export async function hash(password) {
    const salt =  await bcrypt.genSalt(4);
    return  await bcrypt.hash(password, salt);
}
  
export async function verify(password, hash) {
    return await bcrypt.compare(password, hash);
  }