        const selectElement = document.getElementById("playerName");
        selectElement.addEventListener("change", async function(){
            const selectedValue = this.value;
            const url = "https://api.letsplaywithballs.com/?name=" + selectedValue + "&get_active_years=True"
            try{
                const response = await
                fetch(url, {mode: 'cors'});
                if(!response.ok){
			console.log(response.status);
			console.log(response.url);
                }
                const json = await
                response.json();
                const selectElement = document.getElementById("year");
                selectElement.innerHTML = "";
                //console.log(json)
                let seasonArray = JSON.stringify(json);
                seasonArray = JSON.parse(seasonArray);
                for(let i = 0; i < seasonArray.length; i++){
                    const option = document.createElement("option");
                    option.value = seasonArray[i];
                    option.text = seasonArray[i];
                    selectElement.add(option);
                }
                //console.log(json);
            } catch (error) {
            console.error(error.message)}
        })
        const selectElement2 = document.getElementById("player2Name");
        selectElement2.addEventListener("change", async function(){
            const selectedValue = this.value;
            const url = "https://api.letsplaywithballs.com/?name=" + selectedValue + "&get_active_years=True"
            try{
                const response = await
                fetch(url, {mode: 'cors'});
                if(!response.ok){
			console.log(response.status);
			console.log(response.url);
                }
                const json = await
                response.json();
                const selectElement = document.getElementById("year2");
                selectElement.innerHTML = "";
                //console.log(json)
                let seasonArray = JSON.stringify(json);
                seasonArray = JSON.parse(seasonArray);
                for(let i = 0; i < seasonArray.length; i++){
                    const option = document.createElement("option");
                    option.value = seasonArray[i];
                    option.text = seasonArray[i];
                    selectElement.add(option);
                }
                //console.log(json);
            } catch (error) {
            console.error(error.message)}
        })
        const formElement = document.getElementById("chartForm")
        formElement.addEventListener("submit", async function(event){
		event.preventDefault();
		const formdata = new FormData(formElement);
		let playername = formdata.get("playername");
		let year = formdata.get("year");
		let player2name = formdata.get("player2name");
		console.log(player2name)
		let year2 = formdata.get("year2");
		
		const url = "https://api.letsplaywithballs.com/?name=" + playername + "&year=" + year;
            try{
                const response = await
                fetch(url, {mode: 'cors'});
                if(!response.ok){
                    throw new Error("Response status: ${response.status}");
                }
                const divText = await
                response.text();
                const selectDiv = document.getElementById("chartDiv");
                selectDiv.innerHTML = divText;
            } catch (error) {
            console.error(error.message)};
			
		if (player2name.length > 0){
		const url = "https://api.letsplaywithballs.com/?name=" + player2name + "&year=" + year2;
			console.log(player2name);
            try{
                const response = await
                fetch(url, {mode: 'cors'});
                if(!response.ok){
                    throw new Error("Response status: ${response.status}");
                }
                const divText = await
                response.text();
                const selectDiv = document.getElementById("chartDiv");
                selectDiv.innerHTML += divText;
		    //console.log(divText);
			} catch (error) {
            console.error(error.message)}
        }
		})
		function showSecondChart(){
		let hiddenElements = document.getElementsByClassName("player2");
		//console.log(hiddenElements);
		for(let i = 0; i < hiddenElements.length; i++){
		hiddenElements[i].style.display = "inline";
		}
		}
