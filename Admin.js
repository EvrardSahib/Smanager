class Admin {
    constructor(nom,prenom,age,mail,quartier){
    this.nom=nom;
    this.prenom=prenom;
    this.age=age;
    this.mail=mail;
    this.quartier=quartier;
}
get getnom()
{
    return this.nom
}
set setnom(nom)
{
    this.nom=nom
}

get getprenom()
{
    return this.prenom
}
set setprenom(prenom)
{
    this.prenom=prenom
}

get getage()
{
    return this.age
}
set setage(age)
{
    this.age=age
}

get getmail()
{
    return this.mail
}
set setmail(mail)
{
    this.mail=mail
}

get getquartier()
{
    return this.quartier
}
set setquartier(quartier)
{
    this.quartier=quartier
}
}