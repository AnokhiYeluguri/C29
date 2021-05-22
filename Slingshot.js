class Slingshot{

    constructor (body1,pointB){
        var options ={
            bodyA:body1,
            pointB:pointB,
            length:10,
            stiffness:0.04,
        }

        this.s1 = loadImage("sprites/sling1.png")
        this.s2 = loadImage("sprites/sling2.png")
        this.s3 = loadImage("sprites/sling3.png")
        this.chain = Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.chain)
    }
    display(){

        image(this.s1,200,20)
        image(this.s2,170,20)


if(this.chain.bodyA){
    var p1 = this.chain.bodyA.position;
    var p2 = this.pointB

    push()
    stroke("#54270F")
   
    if (p1.x<220){
        strokeWeight(10)
        line(p1.x-20,p1.y,p2.x-10,p2.y)
        line(p1.x-20,p1.y,p2.x+30,p2.y-3)
        image(this.s3,p1.x-30,p1.y-10,15,30)
    }
    else{
        strokeWeight(3)
        line(p1.x+20,p1.y,p2.x-10,p2.y)
        line(p1.x+20,p1.y,p2.x+30,p2.y-3)
        image(this.s3,p1.x+25,p1.y-10,15,30)
    }
    pop()
}

    }
    fly(){

        this.chain.bodyA = null
    }
}