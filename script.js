var obj = [
    {
        id: 1,
        userName: 'Ayush',
        enroll: 200120116077,
    },
    {
        id: 2,
        userName: 'Krushmi',
        enroll: 200120116078,
    },
    {
        id: 3,
        userName: 'Frenny',
        enroll: 200120116076,
    },
    
]
console.log(obj,typeof obj);
obj.map((res)=>{
    console.log("\nID: " + res.id + "\nUsername: "+ res.userName + "\nEnrollment: " + res.enroll);
})