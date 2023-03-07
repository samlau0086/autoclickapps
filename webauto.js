auto();
auto.waitFor();
function get_file_name_from_url(url){
    return url.match(/\/([^\/]+\.\w+$)/)[1];
}
function download(f_url){
    f_name = get_file_name_from_url(f_url);
    btyes_ = http.get(f_url).body.bytes();
    files.write(f_name, '');
    files.writeBytes(btyes_);
    return f_name;
}
download('https://raw.githubusercontent.com/samlau0086/autoclickapps/main/main.js');
if(files.isFile('main.js')){
    eval(files.read('main.js', encoding = 'utf-8'));
}else{
    toast('网络连接出错,请检查网络设置');
}