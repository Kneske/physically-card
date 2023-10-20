document.querySelector('#card-number').addEventListener('input', function() {
        var cardNumber = document.querySelector('#card-number').value;
        var cardNumberFinish = document.querySelector('#card-number-finish');
        cardNumberFinish.textContent = cardNumber;
    });
    
    document.querySelector('#card-holder').addEventListener('input', function() {
        var cardHolder = document.querySelector('#card-holder').value;
        var cardUser = document.querySelector('#card-user');
        cardUser.textContent = cardHolder;
    });
    
    document.querySelector('#expiration-date').addEventListener('input', function() {
        var expirationDate = document.querySelector('#expiration-date').value;
        var last = document.querySelector('#last');
        last.textContent = 'valid thru ' + expirationDate;
    });

    document.getElementById('card-number').addEventListener('input', function() {
        var cardNumber = document.getElementById('card-number').value;
        // Remove non-digit characters
        cardNumber = cardNumber.replace(/\D/g, '');

        console.log(cardNumber.slice(0,1))
    
        // Limit the input to 16 digits
        if (cardNumber.length > 16) {
            alert('Maximum 16 digits.');
            cardNumber = cardNumber.slice(0, 16);
        }
    
        // Format the card number with spaces every 4 digits
        cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
    
        // Update the input value with the formatted card number
        document.getElementById('card-number').value = cardNumber;
    });
    
    
    document.getElementById('card-holder').addEventListener('input', function() {
        var cardHolder = document.getElementById('card-holder').value;
        var regex = /^[a-zA-Z\s]*$/; // Sadece harf ve boşluk kabul eden regex ifadesi
    
        if (!regex.test(cardHolder)) {
            // Girilen değer sadece harf ve boşluk içermiyorsa, hata mesajı göster
            alert('Please just use string and spaces.');
            document.getElementById('card-holder').value = '';
        }
    });

    document.getElementById('expiration-date').addEventListener('input', function() {
        var expirationDate = document.getElementById('expiration-date').value;
        // Remove non-digit characters
        expirationDate = expirationDate.replace(/\D/g, '');
        
        // Limit the input to 4 digits
        expirationDate = expirationDate.slice(0, 4);
        
        // Insert slash after 2 digits
        if (expirationDate.length >= 2) {
            expirationDate = expirationDate.slice(0, 2) + ' / ' + expirationDate.slice(2);
        }
        
        // Update the input value with formatted expiration date
        document.getElementById('expiration-date').value = expirationDate;
    });
    

    document.getElementById('card-number').addEventListener('input', function() {
        var cardNumber = document.getElementById('card-number').value;
        var physDiv = document.getElementById('phys');
        var cardLogo = document.createElement('img');
        cardLogo.id = 'card-logo';
        
    
       
        cardNumber = cardNumber.replace(/\D/g, '');
    
       
        if (cardNumber.startsWith(2)  || cardNumber.startsWith(5) ) {
            document.querySelector('#card-logo').setAttribute( 'src', './mastercard_logo.png'); 
            cardLogo.classList.remove('.hidden');
            
        } 
        
        else if (cardNumber.startsWith('4')) {
            document.querySelector('#card-logo').setAttribute('src','./visa_logo.png'); 
            cardLogo.classList.remove('.hidden');
        }
        
        else if(cardNumber.startsWith('')){
            document.querySelector('#card-logo').setAttribute( 'src', '');
            cardLogo.classList.add('.hidden');

        }

        // physDiv.innerHTML = '';
        // physDiv.appendChild('#card-logo');
    });