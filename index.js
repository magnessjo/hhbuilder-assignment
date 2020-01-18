
// Scoped Solution

function formSolution() {

  var form = document.querySelector('form');
  var addButton = form.querySelector('button.add');
  var listWrapper = document.querySelector('.household');
  var ageInput = form.querySelector('input[name="age"]');
  var realtionshipSelect = form.querySelector('select[name="rel"]');
  var smokerCheckbox = form.querySelector('input[type="checkbox"]');
  var entriesMap = [];

  // Display Entries

  function displayEntries() {

    listWrapper.innerHTML = '';

    for (var i = 0; i <= entriesMap.length - 1; i++) {
      var person = entriesMap[i];

      function scopeCreation(person, index) {

        var container = document.createElement('li');
        var wrapper = document.createElement('div');
        var titleWrapper = document.createElement('div');
        var ageText = document.createElement('p');
        var smokerText = document.createElement('p');
        var relationshipText = document.createElement('p');
        var titleText = document.createElement('p');
        var removeButton = document.createElement('button');
        var viewButton = document.createElement('button');

        removeButton.innerHTML = 'Remove';
        removeButton.addEventListener('click', function () {

          entriesMap.splice(index, 1);
          displayEntries();

        });

        viewButton.innerHTML = 'View';
        viewButton.addEventListener('click', function () {

          wrapper.style.display = 'block';
          viewButton.style.display = 'none';

        });

        wrapper.style.display = 'none';

        titleText.innerHTML = 'Random Person Name';
        relationshipText.innerHTML = 'Relationship : ' + person.rel;
        smokerText.innerHTML = 'Is a Smoker : ' + person.smoker;
        ageText.innerHTML = 'Age : ' + person.age;

        wrapper.appendChild(ageText);
        wrapper.appendChild(relationshipText);
        wrapper.appendChild(smokerText);

        titleWrapper.appendChild(titleText);
        titleWrapper.appendChild(viewButton);
        titleWrapper.appendChild(removeButton);

        container.appendChild(titleWrapper);
        container.appendChild(wrapper);

        listWrapper.appendChild(container);

      }

      scopeCreation(person, i);

    }

  }

  // Validate Age

  function validateAge(value) {

    if (value && value > 0) return true;

    return false;

  }

  // Validate Relationship 

  function validateRelationship(selected) {

    if (selected.value !== '') return true;

    return false;

  }

  // Add Submit 

  addButton.addEventListener('click', function (event) {

    event.preventDefault();

    var ageValue = ageInput.value;
    var relationshipValue = realtionshipSelect.options[realtionshipSelect.selectedIndex].value;
    var smokerValue = smokerCheckbox.checked;

    var isValidAge = validateAge(ageValue);
    var isValidRelationship = validateRelationship(relationshipValue);

    var clearForm = function () {
      ageInput.value = '';
      realtionshipSelect.value = 0;
      smokerCheckbox.checked = false;
    }

    if (isValidAge && isValidRelationship) {

      var entryObj = {
        age: ageValue,
        rel: relationshipValue,
        smoker: smokerValue,
      }

      entriesMap.push(entryObj);
      clearForm();
      displayEntries();
    }

  });

  // Form Submission 

  form.addEventListener('submit', function (event) {

    event.preventDefault();

    console.log(JSON.stringify(entriesMap));

  });

}

// Load

document.addEventListener('DOMContentLoaded', function () {
  formSolution();
});
