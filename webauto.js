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


download();