class pizza{
  //type constructor below
  constructor(s,m,v){
    this.size = s
    this.meatToppings = m
    this.veggieToppings = v
    }
  //type instance functions below
  this.sizeCost = function(){
    if(this.size=="Small"){
      return 7.99
    }
    else if (this.size=="Medium") {
      return 9.99
    }
    else if (this.size=="Large") {
      return 12.99
    }
    else (this.size=="Extra-Large") {
      return 15.99
    }
  }
  this.toppingCost= function(topping){
    if(topping=="meat"){
      return(this.meatToppings.length *.99)
    }
    else if(topping=="veggie"){
      return (this.veggieToppings.length *.50)
    }
  }
  this.price = function(){
    return (this.sizeCost()+this.toppingCost())
  }



}


  //type class functions below
this
