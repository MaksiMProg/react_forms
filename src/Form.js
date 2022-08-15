import {useState, useEffect} from 'react';

 function Form(){
    const [name, setName]=useState();
    const [surname, setSurname]=useState();
    const [zipcode, setZipCode]=useState();
    const [birthDate, setBirthDate]=useState();
    const [result, setResult]=useState();
    const [country, setCountry]=useState();
    const [checked, setChecked]=useState();
    const [value, setValue] = useState();
    const [radio, setRadio]=useState();
    const [subs, setSubs]=useState();
function show(){
   const allArguments=<div>
    Name:
    <p>{name}</p> 
    Surname:
    <p>{surname}</p>
    Zipcode:
    <p>{zipcode}</p>
    BirthDate:
    <p>{birthDate}</p>
    Country:
    <p>{country}</p>
    Presents:
<p>{value}</p>
Male/female:
<p>{radio === '1' ? 'male' : 'female'}</p>
<p>{subs}</p>
    </div>;
   setResult(allArguments);
}

   return(
    <div>
        Name:
        <input type='text' value={name} onChange={(event)=>{setName(event.target.value)}}/>
        Surname:
        <input type='text' value={surname} onChange={(event)=>{setSurname(event.target.value)}}/>
        Zipcode:
        <input type='text' value={zipcode} onChange={(event)=>{setZipCode(event.target.value)}}/>
        BirthDate:
        <input type='date' value={birthDate} onChange={(event)=>{setBirthDate(event.target.value)}}/>
        <select  onChange={(event)=>{setCountry(event.target.value)}}>
            <option>
            Ukraine
            </option>
            <option>
            Belarus
            </option>
            <option>
            Russia
            </option>
        </select>
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
		<p> {checked ? 'согласен на обработку данных' : 'дайте согласие на обработку данных'}</p>
        <select value={value} onChange={(event)=>{setValue(event.target.value)}} multiple={true}>
            <option value='Phone'>
            PHONE
            </option>
            <option value="TV">
            TV
            </option>
            <option value='Computer'>
            COMPUTER
            </option>
        </select>
       <p>male</p>
        <input
			type="radio"
			name="radio"
			value="1"
			checked={radio === '1' ? true : false}
			onChange={(event)=>{setRadio(event.target.value)}}
		/>
        <p>female</p>
		<input
			type="radio"
			name="radio"
			value="2"
			checked={radio === '2' ? true : false}
			onChange={(event)=>{setRadio(event.target.value)}}
		/>
        <p> {subs ? 'Отказаться от уведомлений' : 'Получать уведомления'}</p>
		 <input type="checkbox" checked={subs} onChange={() => setSubs(!subs)} />
		
        <button onClick={show}>Send</button>
{result}
      </div>
   
   )
}
export default Form;