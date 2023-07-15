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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DLQYUnNo4IlRamwj_gb06ndSkZtlZOG4Ag&usqp=CAU")

const massages = new Service(
    "Sports Massages", 
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
    "https://www.insure4sport.co.uk/blog/wp-content/uploads/sites/9/2022/12/sports-massage-oils.jpg")
const assessments = new Service(
    "Assessment and Treatment Of Musculoskeletal Conditions", 
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
    "https://www.rheumatologistgatesville.co.za/img/services/musculoskeletal-disorders.jpg")
const rehab = new Service(
    "MSK conditions, Pre and Post-operative Orthopedic Rehabilitation", 
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RULIjL61S38rXsg-sIIFPqokzhU7srvCAQ&usqp=CAU")
const visits = new Service(
    "Home Visits", 
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
    "https://physiotherapycure.com/wp-content/uploads/2022/09/home-visit-physiotherapy1.jpg")


const servicesArray = []
servicesArray.push(dryNeedling)
servicesArray.push(massages)
servicesArray.push(assessments)
servicesArray.push(rehab)
servicesArray.push(visits)

export {dryNeedling, massages, servicesArray}