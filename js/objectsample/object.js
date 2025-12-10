// const sample_object = {
//     first_name: "sb",
//     secound_name: "km",
//     employee: [
//         {
//             first_name: 'sria'
//         }
//     ]
// };
// const {employee: [sample]}=sample_object
// console.log(sample.first_name)

const sample_data = {
    user: {
        id: 101,
        name: "Subham",
        profile: {
            contact: {
                email: "subham@example.com",
                phone: ["9999999999", "8888888888"]
            },
            social: {
                facebook: "subham.fb",
                twitter: "subham.tw"
            }
        },

        address: {
            current: {
                city: "Bhubaneswar",
                zipcode: 751001,
                geo: {
                    lat: 20.2961,
                    long: 85.8245
                }
            },
            permanent: {
                city: "Cuttack",
                zipcode: 753001,
                pincodeList: [
                    {
                        pincode: 32121,
                        state: "Odisha",
                        region: {
                            zone: "East",
                            district: "Khordha",
                            subAreas: [
                                { areaName: "Nayapalli", code: 101 },
                                { areaName: "Jayadev Vihar", code: 102 }
                            ]
                        }
                    }
                ]
            }
        },

        orders: [
            {
                orderId: 201,
                amount: 2500,
                items: [
                    { name: "Mouse", qty: 1 },
                    { name: "Keyboard", qty: 1 }
                ]
            },
            {
                orderId: 202,
                amount: 55000,
                items: [
                    { name: "Laptop", qty: 1 }
                ]
            }
        ]
    }
};
const {user:{profile:{contact:{email,phone:[phone_data,sampledata2]}}}}=sample_data



// Extract email, phone

// Extract city, lat/long

// Extract pincode, district

// Extract order items

// Extract subAreas names

// ✔ Practice Tasks

