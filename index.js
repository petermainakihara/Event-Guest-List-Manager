const form = document.getElementById('guest-form');
const nameInput = document.getElementById('guest-name');
const guestList = document.getElementById('guest-list');

 
let guests = [];


function MyFormSubmit(event) {
  event.preventDefault();

  const guestName = nameInput.value.trim();

  
  if (!guestName) {
    alert('Please enter a guest name!');
    return;
  }

  
  if (guests.length >= 10) {
    alert('Guest list is full! Maximum 10 guests allowed.');
    return;
  }

  
  const guest = {
    id: Date.now(), 
    name: guestName,
    attending: false        
  };

  guests.push(guest);       
  nameInput.value = ''; 
  showGuests();            
}


function showGuests() {
  guestList.innerHTML = '';

  guests.forEach(guest => {
    const li = document.createElement('li');


    li.textContent = `${guest.name} — ${guest.attending ? 'Attending' : 'Not Attending'}`;

  
    const rsvpBtn = document.createElement('button');
    rsvpBtn.textContent = 'Toggle RSVP';
    rsvpBtn.onclick = () => {
      guest.attending = !guest.attending;
      showGuests(); 
    };
    li.appendChild(rsvpBtn);

  
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => {
      guests = guests.filter(g => g.id !== guest.id);
      showGuests();
    };
    li.appendChild(removeBtn);

    guestList.appendChild(li);
  });
}


form.addEventListener('submit', MyFormSubmit);
