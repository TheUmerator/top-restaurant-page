export function loadMenu() {
    const siteContent=document.querySelector('.content');

    let mealTypes = ['Breakfast', 'Brunch', 'Dinner', 'Dessert'];

    let breakItems = ["Sydney's Omlette", "Longanisa Breakfast Sandwich with Hash Browns"];
    let brunchItems = ["Focaccia", "Braised Beef Sandwiches"];
    let dinnerItems = ["Chicago-Style Deep Dish Pizza", "Carmy's Lemon Chicken Piccata", "Mikey's Beef Braciole"];
    let dessItems = ["Marcus's Chocolate Ganache Cake", "Marcus's Perfect Doughnut", "Carmy's Plum Gelée"];

    let mealItems=[breakItems,brunchItems,dinnerItems,dessItems];

    let breakDesc = ["A delicate French omelette filled with Boursin cheese and topped with crushed sour cream and onion potato chips.",
        "Filipino-inspired breakfast sandwich with savory longanisa sausage, fried egg, melted American cheese, and crispy hash browns, on toasted English muffins"
    ];
    let brunchDesc = ["Italian flatbread with a golden brown crust and soft interior. Typically topped with herbs, olive oil, and vegetables.",
        "Chicago-style Italian beef sandwiches made with tender and juicy beef, sweet or hot peppers, giardiniera, and jus."
    ];
    let dinnerDesc = ["Thick crust pizza with generous amounts of cheese, meat, vegetables, and tomato sauce. Baked at a high temperature to create a crispy crust and moist interior.",
        "Tender chicken cutlets in a bright and flavorful lemon butter sauce, accented with briny capers and fresh parsley.",
        "Thinly sliced beef layered with prosciutto, breadcrumbs, cheese, pine nuts, and parsley, then rolled up and braised in a flavorful tomato sauce. Served over your choice of pasta."
    ];
    let dessDesc = ["A rich and decadent chocolate cake layered with silky smooth ganache frosting. ", 
        "The classic American dessert elevated with premium ingredients and house-made chocolate glaze. Served with chocolate mousse and fresh raspberries", 
        "A sweet and tart plum jelly with a chewy texture, served with compressed plums and plum wine syrup."];

    let mealDesc=[breakDesc,brunchDesc,dinnerDesc,dessDesc];
    
    // console.log(mealItems[0][1]);

    for(let i=0;i<mealTypes.length;i++){
        // console.log(mealTypes[i]);

        const meal=document.createElement('div');
        meal.classList.add('meal');

        const mType=document.createElement('div');
        mType.textContent=mealTypes[i];
        mType.classList.add('meal-type');

        meal.appendChild(mType);

        for(let j=0;j<mealItems[i].length;j++){
            const mItem=document.createElement('div');
            mItem.textContent=mealItems[i][j];
            mItem.classList.add('meal-item');

            const mDesc=document.createElement('div');
            mDesc.textContent=mealDesc[i][j];
            mDesc.classList.add('meal-desc');


            // console.log(mealItems[i][j]);
            // console.log(mealDesc[i][j]);

        meal.appendChild(mItem);
        meal.appendChild(mDesc);

        siteContent.appendChild(meal);
        }
        
    }

    }