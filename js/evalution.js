    function doEval() {

        let currentExpression = document.querySelector('input').value;

        console.log(currentExpression)

        if  (currentExpression == null || currentExpression == ""){

            alert('Empty expression.');
            return
        }

        try {
            
            var results = eval(document.querySelector('input').value);
            
            var table = document.getElementById("results");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            
            var currentdate = new Date();
            var dateString = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/"
            + currentdate.getFullYear() + " - "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
            
            cell1.innerHTML = dateString;
            cell2.innerHTML = currentExpression;
            cell3.innerHTML = results;
            
            if (localStorage) {
                // LocalStorage is supported!
                
                //localStorage.setItem('history', JSON.stringify(expressionHistory));
                
                /*
                 var expressionHistory = [];
                var history = JSON.parse(localStorage.getItem('history'));
                if (history){
                    expressionHistory.push(history);
                    expressionHistory.push(currentExpression);
                    console.log("expressionHistory:", expressionHistory);
                }else{
                    expressionHistory.push(currentExpression);
                    console.log("newExpressionHistory:", expressionHistory);
                }
                
                localStorage.setItem('history', JSON.stringify(expressionHistory));
                 */
                
                localStorage.setItem(currentExpression, currentdate.getTime());
                
                console.log("local Storage:", localStorage);
            } else {
                //console.log("unsupported");
                // No support. Use a fallback such as browser cookies or store on the server.
            }
            
        } catch (error) {
            alert('Invalid expression.');
        }
    }