// first study about data types => https://www.javatpoint.com/javascript-data-types

// There are two types of memories: Stack(Primitive Data types) & Heap(Non-primitive Datatype)
// So whenever we declare primitive DT, it is stored in stack memory and we get the copy of it.
// Whereas when we declare non-primitive DT, it is stored in heap memory and we get the reference of the original values.

let one = "Subha"
let two = one //value of var "one" is copied to var "two"
two = "Taraf" //value of var "two" is changed to the value

let userone = { //non-primitive, at stack userone variable is created and it is pointing to the values that are in heap.
    email : "abc@gmail.com",
    phone : 1221312
}
let usertwo = userone // at stack usertwo variable is created and it is pointing to the same values in heap as that of userone.