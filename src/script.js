/* Add any JavaScript you need to this file. */
var library = [
    {
      name: 'Cord/Cordless Senior',
      id: 1,
      collection: '5 Star',
      category: 'Clipper',
      cost: 159.00
    },
    {
      name: 'Cord/Cordless Metal Edition',
      id: 2,
      collection: '5 Star',
      category: 'Clipper',
      cost: 179.00
    },
    {
      name: 'Cord/Cordless Magic Clip',
      id: 3,
      collection: '5 Star',
      category: 'Clipper',
      cost: 112.00
    },
    {
      name: 'Cordless Sterling 4',
      id: 4,
      collection: 'Sterling',
      category: 'Clipper',
      cost: 105.00
    },
    {
      name: 'Reflection Senior',
      id: 5,
      collection: 'Sterling',
      category: 'Clipper',
      cost: 100.00
    },
    {
      name: 'Definitions',
      id: 6,
      collection: 'Sterling',
      category: 'Trimmer',
      cost: 66.00
    },
    {
      name: 'Sterling 5',
      id: 7,
      collection: 'Sterling',
      category: 'Trimmer',
      cost: 54.00
    },
    {
      name: 'Cordless Detail Li',
      id: 8,
      collection: '5 Star',
      category: 'Trimmer',
      cost: 139.00
    },
    {
      name: 'Retro T-Cut',
      id: 9,
      collection: '5 Star',
      category: 'Trimmer',
      cost: 66
    },
    {
      name: 'Hero',
      id: 10,
      collection: '5 Star',
      category: 'Trimmer',
      cost: 58
    },
    {
        name: '5 Star Shaver',
        id: 11,
        collection: '5 Star',
        category: 'Shaver',
        cost: 86
    },
    {
        name: '5 Star Finale Lithium',
        id: 12,
        collection: '5 Star',
        category: 'Shaver',
        cost: 98
    },
  ];
  
  window.onload = function() {
    // get variables for buttons
    var allproducts = document.getElementById('allproducts');
    var clippers = document.getElementById('clippers');
    var trimmers = document.getElementById('trimmers');
    var shaver = document.getElementById('shavers');
    var fivestar = document.getElementById('5star');
  
    // loads all products in the library into the main content wrapper
    function loadAllProducts(e = library) {
      for (let i = 0; i < library.length; i++) {
        var gameWrapper = document.querySelector('#wrapper');
        let createDiv = document.createElement('div');
        let imageNode = document.createElement('img');
        let createTitle = document.createElement('h3');
        let createPlatform = document.createElement('p');
        let createCost = document.createElement('p');
        let gamePlatform = document.createTextNode('Category: ' + e[i].category);
        let gameTitle = document.createTextNode(e[i].name);
        let gameCost = document.createTextNode('$' + e[i].cost);
        createDiv.classList.add('clipper');
        createDiv.id = e[i].id.toString();
        imageNode.src = 'images/wahl' + e[i].id.toString() + '.png';
        imageNode.alt = e[i].name + ' box art';
  
        createTitle.appendChild(gameTitle);
        createPlatform.appendChild(gamePlatform);
        createCost.appendChild(gameCost);
  
        createDiv.appendChild(imageNode);
        createDiv.appendChild(createTitle);
        createDiv.appendChild(createPlatform);
        createDiv.appendChild(createCost);
        gameWrapper.insertBefore(createDiv, gameWrapper.childNodes[0]);
      }
    }
  
    // when clicked, displays all products
    allproducts.onclick = function() {
      for (let i = 0; i < library.length; i++) {
        document.getElementById(library[i].id).classList.remove('hidden');
      }
      allproducts.classList.add('currentselection');
      clippers.classList.remove('currentselection');
      trimmers.classList.remove('currentselection');
      shaver.classList.remove('currentselection');
      fivestar.classList.remove('currentselection');
    };
  
    // when clicked, hides all products but clipper
    clippers.onclick = function() {
      for (let i = 0; i < library.length; i++) {
        document.getElementById(library[i].id).classList.remove('hidden');
        if (!library[i].category.includes('Clipper')) {
          document.getElementById(library[i].id).classList.add('hidden');
        }
      }
      allproducts.classList.remove('currentselection');
      clippers.classList.add('currentselection');
      trimmers.classList.remove('currentselection');
      shaver.classList.remove('currentselection');
      fivestar.classList.remove('currentselection');
    };
  
    // when clicked, hides all products but trimmers
    trimmers.onclick = function() {
      for (let i = 0; i < library.length; i++) {
        document.getElementById(library[i].id).classList.remove('hidden');
        if (!library[i].category.includes('Trimmer')) {
          document.getElementById(library[i].id).classList.add('hidden');
        }
      }
      allproducts.classList.remove('currentselection');
      clippers.classList.remove('currentselection');
      trimmers.classList.add('currentselection');
      shaver.classList.remove('currentselection');
      fivestar.classList.remove('currentselection');
    };
  
    // when clicked, hides all products but shaver
    shaver.onclick = function() {
      for (let i = 0; i < library.length; i++) {
        document.getElementById(library[i].id).classList.remove('hidden');
        if (!library[i].category.includes('Shaver')) {
          document.getElementById(library[i].id).classList.add('hidden');
        }
      }
      allproducts.classList.remove('currentselection');
      clippers.classList.remove('currentselection');
      trimmers.classList.remove('currentselection');
      shaver.classList.add('currentselection');
      fivestar.classList.remove('currentselection');
    };
  
    // when clicked, hides all prod but 5 Star collection
    fivestar.onclick = function() {
      for (let i = 0; i < library.length; i++) {
        document.getElementById(library[i].id).classList.remove('hidden');
        if (!library[i].collection.includes('5 Star')) {
          document.getElementById(library[i].id).classList.add('hidden');
        }
      }
      allproducts.classList.remove('currentselection');
      clippers.classList.remove('currentselection');
      trimmers.classList.remove('currentselection');
      shaver.classList.remove('currentselection');
      fivestar.classList.add('currentselection');
    };
  
    loadAllProducts();
  };
  