// upload a file/image

// 1. select and upload image   // 2.5sec
// 2. compress images.  //   4sec
// 3. upload the compressed image in DB. //  2sec

// function upload(image,cb){
//   console.log("image upload started");
//   let imageurl;
//   setTimeout(()=>{
//     console.log("image uploaded");
//     imageurl = `https://amazoneweb.service.s3.bucket/${image}`;
//     cb(imageurl,dbupload)
//   },2500)
// }

// function compress(imageurl,cb){
//   console.log("compress started");
//   setTimeout(()=>{
//     console.log("image compressed");
//     const compressedUrl = imageurl+"/compress";
//     cb(compressedUrl)
//   },4000)
// }

// function dbupload(compressedUrl){
//   console.log("Db upload started");
//   setTimeout(()=>{
//    console.log("image stored to DB",compressedUrl);
//   },2000)
// }

// upload("https://myimage.com",compress);

// more problems - https://www.notion.so/Callback-3089fc5e86058055bb2bfef568d40971?source=copy_link

// function FetchEmail(emailId,cb) {
//     console.log("Fetching email...");
//     setTimeout(() => {
//         let email = { id: emailId, content: "Hello World" };
//         cb(email,MoveToInbox)
//     }, 1000);
// }

// function ScanForVirus(email,cb) {
//     console.log("Scanning for virus...");
//     setTimeout(() => {
//         email.scanned = true;
//         cb(email)
//     }, 1500);
// }

// function MoveToInbox(email) {
//     console.log("Moving to inbox...");
//     setTimeout(() => {
//         email.location = "inbox";
//         console.log("email sent successfully",email);
//     }, 1000);
// }
// FetchEmail("shubham.e21@nsut.ac.in",ScanForVirus)
// pass the required paramaeter in function and write the calling of functions such that it will run synchronously

function PlaceOrder(productId,cb) {
    console.log("Placing order...");
    setTimeout(() => {
        let order = { id: productId, status: "placed" };
        cb(order,ShipOrder)
    }, 1000);

}

function ProcessPayment(order,cb) {
    console.log("Processing payment...");
    setTimeout(() => {
        order.status = "paid";
        order.transactionId = "TXN" + Date.now();
        cb(order)
    }, 2000);
}

function ShipOrder(order) {
    console.log("Shipping order...");
    setTimeout(() => {
        order.status = "shipped";
        order.trackingId = "TRACK" + Math.random().toString(36).substr(2, 9);
        console.log("order shipped",order);
    }, 1500);
}
PlaceOrder("KEREKBR1212",ProcessPayment)
// pass the required paramaeter in function and write the calling of functions such that it will run synchronously