
class O_rs_file{
    constructor(
        b_full_code_plus_extended,
        s_path_file, 
        a_s_rs
    ){

        this.b_full_code_plus_extended = b_full_code_plus_extended
        this.s_path_file = s_path_file
        this.a_s_rs = a_s_rs
    }
}
class O_code_autoextended{
    constructor(
        s_original, 
        s_autoextended, 
        a_o_rs_file
    ){
        this.s_original = s_original, 
        this.s_autoextended = s_autoextended, 
        this.a_o_rs_file = a_o_rs_file
    }
}

export {
    O_rs_file,
    O_code_autoextended
}