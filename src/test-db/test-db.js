export const testDB = {
    user: {
        login: 'ZipparS',
        name: 'Andrew',
        password: '123',
        email: 'Busibo@inbox.ru'
    },
    category: {
        categoryFirst1: {
            id: "categoryFirst1",
            num: 1,
            type: "category",
            parent: "",
            name: "category First",
            description: "Test category in db",
            active: false
        },
        categorySecond2: {
            id: "categorySecond2",
            num: 2,
            type: "category",
            parent: "",
            name: "category Second",
            description: "Test category in db",
            active: false
        },
        categoryThird3: {
            id: "categoryThird3",
            num: 3,
            type: "category",
            parent: "",
            name: "category Third",
            description: "Test category in db",
            active: false
        },
        Subcategoryone4: {
            id: "Subcategoryone4",
            num: 4,
            type: "category",
            parent: "categoryFirst1",
            name: "Sub category one",
            description: "Test sub category in db",
            active: false
        },
        Subcategorytwo5: {
            id: "Subcategorytwo5",
            num: 5,
            type: "category",
            parent: "categoryFirst1",
            name: "Sub category two",
            description: "Test sub category in db",
            active: false
        },
        Subcategoryone6: {
            id: "Subcategoryone6",
            num: 6,
            type: "category",
            parent: "categoryFirst1",
            name: "Sub category one",
            description: "Test sub category in db",
            active: false
        }
    },
    tasks: {
        Firsttask1: {
            id: "Firsttask1",
            type: "task",
            parent: "categoryFirst1",
            name: "First task",
            description: "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
            time: "September 14, 2016",
            author: "Artemelka",
            checked: false
        },
        Firsttask2: {
            id: "Firsttask2",
            type: "task",
            parent: "categoryFirst1",
            name: "First task",
            description: "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)",
            time: "October 18, 2018",
            author: "Unknow User",
            checked: false
        },
        taskOne3: {
            id: "taskOne3",
            type: "task",
            parent: "categorySecond2",
            name: "Second task",
            description: "Test task in db",
            time: "September 1, 2017",
            author: "Artemelka",
            checked: true
        },
        taskOne4: {
            id: "taskOne4",
            type: "task",
            parent: "Subcategoryone4",
            name: "Second task",
            description: "Test task in db",
            time: "September 30, 2018",
            author: "Artemelka",
            checked: true
        }
    }
};