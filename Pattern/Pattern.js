// Square Pattern 

let n=4;
// for(let i=0;i<n; i++){
//    let pattern='';
//     for(let j=1;j<=n;j++)
//         {
//             pattern+=j;
//         }
//         console.log(pattern);
// }

// 123\n456\n789 

// let num=1;
// for(let i=0;i<n;i++){
//     let pattern='';
//     for(let j=0;j<n;j++){
//             pattern+=num;
//             num+=1;
//         }
//         console.log(pattern);

//     }

// let charCode='A'.charCodeAt(0);

// for(let i=0;i<n;i++){
//     let pattern='';
//     for(let j=0;j<n;j++){
//             pattern+=String.fromCharCode(charCode);
//             charCode=charCode+1; 
//         }
//         console.log(pattern);

//     }


// star triangle pattern 

// for(let i=0;i<n;i++)
//     {
//         let pattern='';
//         for(let j=0;j<i+1;j++)
//             {
//                 pattern+='*'
//             }
//             console.log(pattern);

//     }


// for(let i=0;i<n;i++)
//     {
//         let pattern='';
//         for(let j=0;j<i+1;j++)
//             {
//                 k=i+1;
//                 pattern+=k
//             }
//             console.log(pattern);

//     }

// let char='A'.charCodeAt(0);

// for(let i=0;i<n;i++)
//     {
//         let pattern='';
//         for(let j=0;j<i+1;j++)
//             {

//                 pattern+=String.fromCharCode(char);
                
//             }
//             char+=1;
//             console.log(pattern);

// }

// for(let i=0;i<n;i++)
//     {
//         let pattern='';
//         for(let j=0;j<i+1;j++)
//             {
//                     k=j+1;
//                 pattern+=k
                
//             }

//             console.log(pattern);

// }

// for(let i=0;i<n;i++)
//     {
//         let pattern='';
//         for(let j=i+1;j>0;j--)
//             {
//                 pattern+=j;

//             }
//             console.log(pattern);

//     }


let char='A'.charCodeAt(0);
for(let i=0;i<n;i++)
    {
        let pattern='';

        for(let j=0;j<i+1;j++)
            {
                let currentChar=char+i;
                pattern+=String.fromCharCode(currentChar-j);
            }
            console.log(pattern);

    }


