let music=new Audio("./assets/music.mp3");
        let audioturn=new Audio('./assets/ting.mp3');
        let gameover=new Audio('./assets/gameover.mp3');
        let turn="X";
        let isgameover=false;

        // FUNCTION TO CHANGE THE TURN
        const changeturn=()=>{
            return turn==="X"?"0":"X"

        }
        // FUNCTION  TO CHECK FOR A WIN
        const checkwin=()=>{
            let  boxtext=document.getElementsByClassName('boxtext');
            let line =document.getElementById('line');

            let wins=[
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ];

            wins.forEach((e,ind)=>{
                if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) &&
                   (boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&
                   (boxtext[e[0]].innerText!==""))
                   {
                    document.querySelector(".info").innerText=boxtext[e[0]].innerText +" won";
                    isgameover=true;
                    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width='200px';
                    if(ind === 0){
                        line.style.display='block'
                        line.style.top='-390px'
                        line.style.left ="150px"
                    }
                    if(ind === 1){
                        line.style.display='block'
                        line.style.top='-240px'
                        line.style.left ="150px"
                    }
                    if(ind === 2){
                        line.style.display='block'
                        line.style.top='-85px'
                        line.style.left ="150px"
                    }
                    if(ind === 3){
                        line.style.display='block';
                        line.style.transform="rotate(90deg)";
                        line.style.top='-230px';
                        line.style.left ="0px"
                    }
                    if(ind === 4){
                        line.style.display='block';
                        line.style.transform="rotate(90deg)";
                        line.style.top='-240px'
                        line.style.left ="155px"
                    }
                    if(ind === 5){
                        line.style.display='block';
                        line.style.transform="rotate(90deg)";
                        line.style.top='-240px'
                        line.style.left ="310px"
                    }
                    if(ind === 6){
                        line.style.display='block';
                        line.style.transform="rotate(45deg)";
                        line.style.top='-240px'
                        line.style.left ="95px";
                        line.style.width ='530px';
                    }
                    if(ind === 7){
                        line.style.display='block';
                        line.style.transform="rotate(-45deg)";
                        line.style.top='-240px';
                        line.style.left ="155px";
                        line.style,width= "530px"
                    }
             }
            })
        }

        //  game logic
        music.play();
        let boxes=document.getElementsByClassName('box');
        Array.from(boxes).forEach(element=>{
            let boxtext=element.querySelector('.boxtext');
            element.addEventListener("click",()=>{
                if(boxtext.innerText===""){
                    boxtext.innerText=turn;
                    turn=changeturn();
                    audioturn.play();
                    checkwin();


                    if(!isgameover){
                        document.getElementsByClassName('info')[0].innerText="Turn for  " + turn;
                    }
                    
                }
            })
        })
        // logic for reset button
        document.getElementById('reset').addEventListener("click",()=>{

            let boxtexts=document.querySelectorAll('.boxtext');
            Array.from(boxtexts).forEach(element=>{
                element.innerText=""
            });
            turn="X";
            isgameover=false;

            document.getElementsByClassName('info')[0].innerText=' Turn for '+ turn;
            // isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width='0';

            let line =document.getElementById('line').style="none";




            
        })