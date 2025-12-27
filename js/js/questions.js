let name_data='subham'
// let data = '';
// for (let i =name_data.length-1;i>=0;i--){
// data+=name_data[i]
// }
// console.log(data);

// console.log(name_data.length);
// console.log(name_data.toUpperCase());
// console.log(text.match("ain"));
let my_name='i'
let data=["a","e","i","o","u"]
for (let i =0;i<my_name.length;i++){
    let compare_data=my_name[i].toLowerCase()
    for (let i in data){
        if (data[i].includes(compare_data)) {
                    console.log("vowel",compare_data)

        }
    }
}



