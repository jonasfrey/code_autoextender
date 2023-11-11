# usage 
run in terminal from web
`deno run -A https://deno.land/x/code_autoextender/code_autoextender.js ./src/main.rs`

## whats happening
```rust 
// we can extend a seciont of code, the section between '//extend_start' and '//extend_end' will be taken and stored in 's_code'
// after the 'extend_start' we can add a body of a javascript function wich should return a string
// in here we can use the variable 's_code'
// all lines starting with two comment strings/in this case four slashes will be interpretet as part of the js function
//extend_start
////    return [ 'u16', 'u32', 'u64'].map(
////     (s_type) =>{
////         return s_code.replaceAll('u8', s_type)
////    }).join('\n')
fn f_n_nor__from_u8(n:u8) -> f64 { n as f64 / u8::MAX as f64 }
//extend_end

// this is just normal code it wont be affected by code_autoextender
fn f_tets(n:u8){
    let n2 = 2+n;
}

//extend_start
////         let s_code2 = s_code.replaceAll('231', parseInt(Math.random()*255))
////         s_code2 = s_code2.replaceAll('f_n_random_hardcoded', `f_n_random_hardcoded_rand`)
////         return s_code2
fn f_n_random_hardcoded() -> u8 { return 231 }
//extend_end
```
will become 
```rust 
//This file was automatically generated on Sat Nov 11 2023 13:08:34 GMT+0100 (Central European Standard Time),(1699704514207)
// we can extend a seciont of code, the section between '//extend_start' and '//extend_end' will be taken and stored in 's_code'
// after the 'extend_start' we can add a body of a javascript function wich should return a string
// in here we can use the variable 's_code'
// all lines starting with two comment strings/in this case four slashes will be interpretet as part of the js function
//extend_start
////    return [ 'u16', 'u32', 'u64'].map(
////     (s_type) =>{
////         return s_code.replaceAll('u8', s_type)
////    }).join('\n')
fn f_n_nor__from_u8(n:u8) -> f64 { n as f64 / u8::MAX as f64 }
//extend_end
//extended_start_autgenerated on Sat Nov 11 2023 13:08:34 GMT+0100 (Central European Standard Time),(1699704514207) exact (1699704514208)
fn f_n_nor__from_u16(n:u16) -> f64 { n as f64 / u16::MAX as f64 }
fn f_n_nor__from_u32(n:u32) -> f64 { n as f64 / u32::MAX as f64 }
fn f_n_nor__from_u64(n:u64) -> f64 { n as f64 / u64::MAX as f64 }
//extended_end_autgenerated

// this is just normal code it wont be affected by code_autoextender
fn f_tets(n:u8){
    let n2 = 2+n;
}

//extend_start
////         let s_code2 = s_code.replaceAll('231', parseInt(Math.random()*255))
////         s_code2 = s_code2.replaceAll('f_n_random_hardcoded', `f_n_random_hardcoded_rand`)
////         return s_code2
fn f_n_random_hardcoded() -> u8 { return 231 }
//extend_end
//extended_start_autgenerated on Sat Nov 11 2023 13:08:34 GMT+0100 (Central European Standard Time),(1699704514207) exact (1699704514208)
fn f_n_random_hardcoded_rand() -> u8 { return 127 }
//extended_end_autgenerated

```