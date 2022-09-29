var iloscZn=8;
var iloscWolnychZnakow=0;
var iloscDuzeL=0;
var iloscMaleL=0;
var iloscZnaki=0;
var iloscCyfry=0;
function ustawWolne(){
    iloscWolnychZnakow=+iloscZn-(+iloscDuzeL+ +iloscMaleL+ +iloscZnaki+ +iloscCyfry);

    if(iloscWolnychZnakow<0){
        reset();
        alert("Funkcja idiotoodporna - za mało znaków");
    }
    document.getElementById("iloscDuzeL").max=+iloscWolnychZnakow+ +iloscDuzeL;
    document.getElementById("iloscMaleL").max=+iloscWolnychZnakow+ +iloscMaleL;
    document.getElementById("iloscZnaki").max=+iloscWolnychZnakow+ +iloscZnaki;
    document.getElementById("iloscCyfry").max=+iloscWolnychZnakow+ +iloscCyfry;
}
function reset(){
    iloscCyfry=0;
    document.getElementById("iloscCyfry").values=0;
    document.getElementById("wybCyfry").values=0;
    iloscDuzeL=0;
    document.getElementById("iloscDuzeL").values=0;
    document.getElementById("wybDuzeL").values=0;
    iloscMaleL=0;
    document.getElementById("iloscMaleL").values=0;
    document.getElementById("wybMaleL").values=0;
    iloscZnaki=0;
    document.getElementById("iloscZnaki").values=0;
    document.getElementById("wybZnaki").values=0;
    iloscWolnychZnakow=iloscZn;
}
function wybieranieDuzeL(){
    iloscDuzeL=document.getElementById("iloscDuzeL").value;
    document.getElementById("wybDuzeL").value=iloscDuzeL;
    ustawWolne()
}
function wybieranieMaleL(){
    iloscMaleL=document.getElementById("iloscMaleL").value;
    document.getElementById("wybMaleL").value=iloscMaleL;
    ustawWolne()
}
function iloscZnakow(){
    iloscZn=document.getElementById("iloscZnakow").value;
    ustawWolne()
}
function wybieranieZnaki(){
    iloscZnaki=document.getElementById("iloscZnaki").value;
    document.getElementById("wybZnaki").value=iloscZnaki;
    ustawWolne()
}
function wybieranieCyfry(){
    iloscCyfry=document.getElementById("iloscCyfry").value;
    document.getElementById("wybCyfry").value=iloscCyfry;
    ustawWolne()
}
function generujHaslo(){
    let haslo="";
    const alfabetMale="abcdefghijhklmnoprstuvwxyz";
    const alfabetDuze='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alfabetZnaki="!@#$%^&*()-+=.,"
    const alfabetCyfry="1234567890"

    //losowanie malych liter
    for(let i=0;i<iloscMaleL;i++){
        haslo+=alfabetMale.charAt(Math.floor(Math.random()*alfabetMale.length));
    }
    //losowanie duzych liter
    for(let i=0;i<iloscDuzeL;i++){
        haslo+=alfabetDuze[Math.floor(Math.random()*alfabetDuze.length)];
    }
    //losowanie Znaków
     for(let i=0;i<iloscZnaki;i++){
        haslo+=alfabetZnaki[Math.floor(Math.random()*alfabetZnaki.length)];
    }
    //losowanie cyfr
    for(let i=0;i<iloscCyfry;i++){
        haslo+=alfabetCyfry[Math.floor(Math.random()*alfabetCyfry.length)];
    }
    //losowanie dodatkowych znakow, ktorych nie wybral użytkownik
    for(let i=0;i<iloscWolnychZnakow; i++){
        haslo+=alfabetMale.charAt(Math.floor(Math.random()*alfabetMale.length));
    }
   // let dane=zmianaKolejnosci(haslo);
    document.getElementById("haslo").value=zmianaKolejnosci(haslo);
}
function zmianaKolejnosci(haslo){
    let wynik=haslo.split('');
    for(let i=0;i<wynik.length;i++){
        let los=Math.floor(Math.random()*wynik.length);
        let tmp=wynik[i];
        wynik[i]=wynik[los];
        wynik[los]=tmp;
    }
    haslo=wynik.join('');
    return haslo;
}