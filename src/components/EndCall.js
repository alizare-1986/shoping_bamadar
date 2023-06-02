import React from 'react';
import instagram from '../assets/instagram.jpeg'

const EndCall = () => {
    return (
        <div>
             <div style={{display:'flex',justifyContent:'center'}}>
             <img src={instagram} alt='instagram' style={{width:'40px',height:'40px',margin:'15px'}}/><h2>ما را در شبکه های اجتماعی دنبال کنید</h2> 
            
            </div>
             <div>
            <span>:پشتیبانی در ساعت کاری</span>
            <br></br>
            <span>با مادر همه روزه از ساعت۹تا۱۱ درکنارشماست</span> 
            <br></br>
            <span>ادرس: دزفول بلوار پیام آوران؛تقاطع آفرینش؛شهر تفریحی مادر</span>
            <br></br>
            <span>شماره تماس:۳۸۳۳-۰۶۱</span>
            <br></br>
            <br></br>
            </div>

        </div>
    );
};

export default EndCall;