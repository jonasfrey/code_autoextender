// we can extend a seciont of code, the section between '//code_autoextender_start' and '//code_autoextender_end' will be taken and stored in 's_code'
// after the 'code_autoextender_start' we can add a body of a javascript function wich should return a string
// in here we can use the variable 's_code'
// all lines starting with two comment strings/in this case four slashes will be interpretet as part of the js function
//code_autoextender_start
////    return [ 'u16', 'u32', 'u64'].map(
////     (s_type) =>{
////         return s_code.replaceAll('u8', s_type)
////    }).join('\n')
fn f_n_nor__from_u8(n:u8) -> f64 { n as f64 / u8::MAX as f64 }
//code_autoextender_end

// this is just normal code it wont be affected by code_autoextender
fn f_tets(n:u8){
    let n2 = 2+n;
}

//code_autoextender_start
////         let s_code2 = s_code.replaceAll('231', parseInt(Math.random()*255))
////         s_code2 = s_code2.replaceAll('f_n_random_hardcoded', `f_n_random_hardcoded_rand`)
////         return s_code2
fn f_n_random_hardcoded() -> u8 { return 231 }
//code_autoextender_end