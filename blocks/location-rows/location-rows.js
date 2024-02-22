export default function decorate(block) {
    const div = document.createElement('div');
    div.className = 'location-cards';
  
    [...block.children].forEach((row) => {
      const [slug, locationName, locationPhoneNumber, locationAddress, locationImage] = [...row.children];
  
      const locationWrapper = document.createElement('div');
      locationWrapper.className = 'location';
  
      const image = locationImage.cloneNode(true);
      image.className = 'location-image';
  
      const name = document.createElement('p');
      name.className = 'location-name';
      name.textContent = locationName.textContent;
  
      const phoneNumber = document.createElement('p');
      phoneNumber.className = 'location-phone';
      phoneNumber.textContent = locationPhoneNumber.textContent;
  
      const address = document.createElement('p');
      address.className = 'location-address';
      address.textContent = locationAddress.textContent;
  
      locationWrapper.appendChild(image);
      locationWrapper.appendChild(name);
      locationWrapper.appendChild(phoneNumber);
      locationWrapper.appendChild(address);
  
      div.appendChild(locationWrapper);
    });
  
    block.replaceWith(div);
  }
  