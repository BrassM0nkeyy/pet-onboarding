//Storage Controller
//Item Controller
const ItemCtrol = (function() { 
    //intem constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
    
    //Data Structure
    //this is private rn
    const data = {
        items: [],
        currentItem: null,
        totalCalories: 0
    }

    //this makes its public visible
    return {
        getItems: function() {
            return data.items;
        },
        addItem: function(name, calories) {
           //console.log(name + calories);
           //make id
           let ID;
           if(data.items.length > 0 ){
               ID = data.items[data.items.length -1].id +1;
           } else {
               ID = 0;
           }

           //calories to num
           calories = parseInt(calories);

           //create new item 
           newItem = new Item(ID, name, calories);

           data.items.push(newItem);

           return newItem;
        },

        getItemByID: function(id){
            let found = null; 
            //loop though items
            data.items.forEach((item) => {
                if(item.id === id){
                    //console.log('found it');
                    found = item;
                }
            });
            return found;
        },

        setCurrent: function(item) {
            data.currentItem = item;
        },

        getCurrentItem: function() {
            return data.currentItem;
        },

        getTotalCalories: function() {
            let total = 0;
            data.items.forEach(item => {
                //console.log(item.calories);
                total += item.calories;
            });
            data.totalCalories = total;
            return data.totalCalories;
        },

        logData: function() {
            return data;
        }
    }
})();

//UI controller
const UICtrol = (function() {
    const UISelector = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        itemNameInput: '#item-name',
        itemCalories: '#item-calories',
        totalCalories: '.total-calories'
    }
    return {
        popItemList: function(items){
            let html = '';

            items.forEach(item => {
                html += `<li class="collection-item" id="${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                  <i class="edit-item fa fa-pencil"></i>
                </a>
              </li>`
            });

            //insert list items
            document.querySelector(UISelector.itemList).innerHTML = html;
        },

        getItemInput: function() {
            return {
                name: document.querySelector(UISelector.itemNameInput).value,
                calories: document.querySelector(UISelector.itemCalories).value
            }
        },

        addListItem: function(item) {
            document.querySelector(UISelector.itemList).style.display = 'block';

            //create li element
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.id = `item-${item.id}`;
            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>`
            //insert item
            document.querySelector(UISelector.itemList).insertAdjacentElement('beforeend', li);
        },

        clearInput: function() {
            document.querySelector(UISelector.itemNameInput).value = '';
            document.querySelector(UISelector.itemCalories).value = '';
        },

        addItemToForm: function() {
            UICtrol.showEditState();
            document.querySelector(UISelector.itemNameInput).value = ItemCtrol.getCurrentItem().name;
            document.querySelector(UISelector.itemCalories).value = ItemCtrol.getCurrentItem().calories;   
        },

        hideList: function() {
            document.querySelector(UISelector.itemList).style.display = 'none';
        },

        showTotalCals: function(totalCals) {
            document.querySelector(UISelector.totalCalories).textContent = totalCals;
        },

        clearEditState: function() {
            UICtrol.clearInput();
            document.querySelector(UISelector.updateBtn).style.display = 'none';
            document.querySelector(UISelector.deleteBtn).style.display = 'none';
            document.querySelector(UISelector.backBtn).style.display = 'none';
            document.querySelector(UISelector.addBtn).style.display = 'inline';
        },

        showEditState: function() {
            UICtrol.clearInput();
            document.querySelector(UISelector.updateBtn).style.display = 'inline';
            document.querySelector(UISelector.deleteBtn).style.display = 'inline';
            document.querySelector(UISelector.backBtn).style.display = 'inline';
            document.querySelector(UISelector.addBtn).style.display = 'none';
        },

        getSelectors: function() {
            return UISelector;
        }


    }
})();

//App Controller
const App = (function(ItemCtrol, UICtrol) {
    //load eventslistenters
    const loadEventListeners = function() {
        //get UI seclectors
        const UISelector = UICtrol.getSelectors();

        //add item event
        document.querySelector(UISelector.addBtn).addEventListener('click', itemAddSubmit);

        document.querySelector(UISelector.itemList).addEventListener('click', itemUpdateSubmit);
    }

    //add item submit
    const itemAddSubmit = function(e) {
        const input  = UICtrol.getItemInput();

        if(input.name !== '' && input.calories !== ''){
            const itemN = ItemCtrol.addItem(input.name, input.calories);
            //add to ui
            UICtrol.addListItem(itemN);

            //get total cals
            const totalCalories = ItemCtrol.getTotalCalories();

            //add total cals to ui
            UICtrol.showTotalCals(totalCalories);

            //Clear li's
            UICtrol.clearInput();
        }
        
        //console.log(input);
        e.preventDefault();
    }

    const itemUpdateSubmit = function(e) {
        if(e.target.classList.contains('edit-item')){
            const listID = e.target.parentNode.parentNode.id;
            const idNum = Number(listID.match(/\d/)[0]);
            //console.log(listID);
            const itemToEdit = ItemCtrol.getItemByID(idNum);
            
            //console.log(itemToEdit);
            //set current item
            ItemCtrol.setCurrent(itemToEdit);

            UICtrol.addItemToForm();
        }

        e.preventDefault();
    }
    
    //Public methods 
    return {
        init: function() {
            UICtrol.clearEditState();
            const items = ItemCtrol.getItems();
            if(items.length === 0) {
                UICtrol.hideList();
            } else {
                UICtrol.popItemList(items);
            }
            //get total cals
            const totalCalories = ItemCtrol.getTotalCalories();
            //add total cals to ui
            UICtrol.showTotalCals(totalCalories);
            loadEventListeners();
        }
    }
})(ItemCtrol, UICtrol);

App.init();
