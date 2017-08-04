$(function(){

	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = $('#countries');

	function searchCountries() {
		var countryName = $('#country-name').val();
		if(countryName.length === 0) countryName = 'Poland';
		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList,
			error: showCountriesList
		});
	}

	$('#search').click(searchCountries);

	function showCountriesList(resp) {
		countriesList.empty();
		resp.forEach(function(item){
			$('<li>').text(item.name + ' - ' + item.capital ).appendTo(countriesList);
		});
	
	}
	
});





	

