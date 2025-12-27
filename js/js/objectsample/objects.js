// //  how to create object
// const obj ={
//     first_name:"subham",
//     account_balance:420,
//     gender:"Male",
//     age:30,
//     0:21
// }
// const obj2={
//         first_name:"subham",
//     account_balance:420,
//     gender:"female",
//     age:31,
//     0:24
// }
// class studentName{
//     constructor(first_name,secount_name,email_id){
//     this.first_name=first_name
//     this.secount_name=secount_name
//     this.email_id=email_id
//     }

// }
// const data = new studentName('subham','kumar','das')
// // console.log(data);
// const person_age=new Object()
// person_age.id=1
// person_age.name='subham'
// person_age.emploee_id=50055
// person_age.cnd='tata'
// delete person_age.cnd
// person_age.cnd='tata motors'
// console.log(person_age)
// const data =Object.keys(person_age)
// const value_data=Object.values(person_age)
// const data_data2=Object.entries(person_age)
// const data_flat=data_data2.flat(Infinity)
// console.log(data,value_data,data_data2,data_flat)

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign({},target, source);
// returnedTarget['a']=213
// console.log(returnedTarget);
// const object_assigned={...target,...source}
// object_assigned['a']=21
// console.log(object_assigned)

//  shallow copy and deep copy
// shallow copy added refrence copy
// deep copy uska alag sa clone create hoga
// const object={
//     first_name:"subham",
//     employee_id:"5055"
// }
// const anothter_clone=object
// // object.employee_id='subham'
// const data=structuredClone(anothter_clone)
// data.employee_id=4298
// console.log(data,object);

// nested Objects
// const user ={
//     first_name:"Rohit",
//     balance:420,
//     address:{
//         pincode:246169,
//         state:{
//                     city:"kotdawar",
//                     distrinct :{
//                         "village":"ganjam"
//                     }


//         }


//     },

// }

// console.log(user['address']['state']['city'])
// const user_address=Object.assign({},user)
// user_address.first_name='mohit'
// console.log(user_address,user)

// assign agar nested object change toh user 1 change kare dega 
// best practise useed sturtcted clone 


// const sample_data = {
//     id: 1,
//     name: "Parent Node",
//     type: "root",
//     children: [
//         {
//             id: 2,
//             name: "Child 1",
//             type: "level_1",
//             children: [
//                 {
//                     id: 3,
//                     name: "Child 1.1",
//                     type: "level_2",
//                     children: [
//                         {
//                             id: 4,
//                             name: "Child 1.1.1",
//                             type: "level_3",
//                             details: {
//                                 createdBy: "Subham",
//                                 createdAt: "2025-01-01",
//                                 isActive: true
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     id: 5,
//                     name: "Child 1.2",
//                     type: "level_2",
//                     details: {
//                         rating: 4.5,
//                         tags: ["frontend", "angular", "react"]
//                     }
//                 }
//             ]
//         },

//         {
//             id: 6,
//             name: "Child 2",
//             type: "level_1",
//             children: [
//                 {
//                     id: 7,
//                     name: "Child 2.1",
//                     type: "level_2",
//                     children: []
//                 }
//             ],
//             metadata: {
//                 owner: "Admin",
//                 priority: "high"
//             }
//         }
//     ]
// };
// // destucted value 
// const {id,name,type}=sample_data
// const data_value =[12,21,32]

// const [first_value,secound]=data_value


// console.log(first_value);
// console.log(secound);

// const sample_data = {
//     user: {
//         personal: {
//             address: {
//                 pincode: [
//                     {
//                         pincode: 32121,
//                         city: "Odisha",
//                         state: "Odisha-State",
//                         details: {
//                             postOffice: "Main PO",
//                             region: {
//                                 zone: "East Zone",
//                                 district: "Khordha"
//                             }
//                         }
//                     }
//                 ]
//             }
//         }
//     }
// };

// // const {address:{pincode,city}}=obj
// const {user:{personal:{address:{pincode:[{            pincode: pin,
// }]}}}}=sample_data
// console.log(pin)