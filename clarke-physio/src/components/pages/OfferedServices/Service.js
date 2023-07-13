class Service{
    constructor(name, description, image){
        this.name = name;
        this.description = description;
        this.image = image;
    }
}


const dryNeedling = new Service(
    "Dry Needling", 
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
    "https://i0.wp.com/cranbourneosteopathy.com.au/wp-content/uploads/2021/10/Dry-Needling-2000x980-smaller.jpg?fit=800%2C392&ssl=1")

const massages = new Service(
    "Sports Massages", 
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sC2Mc5PsOHuszfM1_3wTKBYKQDuO0GiSfA&usqp=CAU")
const assessments = new Service(
    "Assessment and Treatment Of Musculoskeletal Conditions", 
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sC2Mc5PsOHuszfM1_3wTKBYKQDuO0GiSfA&usqp=CAU")
const rehab = new Service(
    "MSK conditions, Pre and Post-operative Orthopedic Rehabilitation", 
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sC2Mc5PsOHuszfM1_3wTKBYKQDuO0GiSfA&usqp=CAU")
const visits = new Service(
    "Home Visits", 
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sC2Mc5PsOHuszfM1_3wTKBYKQDuO0GiSfA&usqp=CAU")


const servicesArray = []
servicesArray.push(dryNeedling)
servicesArray.push(massages)
servicesArray.push(assessments)
servicesArray.push(rehab)
servicesArray.push(visits)

export {dryNeedling, massages, servicesArray}