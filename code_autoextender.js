import {
    f_o_code_autoextended__from_s
} from './functions.module.js'


const s_path_current_working_dir = Deno.cwd();
const s_path_folder_current_file = new URL('.', import.meta.url).pathname;

console.log(s_path_current_working_dir)

let s_path_file_in_rel = (Deno.args[0]) ? Deno.args[0]  : `src/main.rs`
let s_path_file_in_abs = `${s_path_current_working_dir}/${s_path_file_in_rel}`

let s_path_folder_file_in = new URL('.',`file://${s_path_file_in_abs}`).pathname;


let s = await Deno.readTextFile(s_path_file_in_abs);

let o_code_autoextended = f_o_code_autoextended__from_s(s);


for(let o_rs_file of o_code_autoextended.a_o_rs_file){
    let s_path = `${s_path_folder_file_in}${o_rs_file.s_path_file}`

    await Deno.writeTextFile(
        o_rs_file.s_path_file,
        o_rs_file.a_s_rs.join('\n')
    );
}

let s_path_folder_in_abs = s_path_file_in_abs.split('/').slice(0,-1).join('/');
let s_name_file_in = s_path_file_in_abs.split('/').pop();
await Deno.writeTextFile(
    `${s_path_folder_in_abs}/${s_name_file_in?.split('.').slice(0,-1)}_autoextended.${s_name_file_in?.split('.').pop()}`,
    o_code_autoextended?.s_autoextended
);
// console.log(s_rs_new)
// console.log(a_s__to_extend);
