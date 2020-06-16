/* var apiKey = "YOUR KEY HERE";
/ City_ID,City,Cloudiness,Country,Date,Humidity,Lat,Lng,Max Temp,Wind Speed
/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - City_ID
 * index 1 - City
 * index 2 - Cloudiness
 * index 3 - Country
 * index 4 - Date
 * index 5 - Humidity
 * index 6 - lat
 * index 7 - Lng
 * index 8 - Max_Temp
 * index 9 - Wind_Speed
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

function getCityData() {

  var csvpath = "Resources/cities.csv"
  d3.json(csvpath).then(function(data) {
    // @TODO: Unpack the dates, open, high, low, close, and volume
    
    buildTable(City_ID, City, Cloudiness, Country, Date, Humidity, Lat, Lng, Max_Temp, Wind_Speed);
  });
}

function buildTable(City_ID, City, Cloudiness, Country, Date, Humidity, Lat, Lng, Max_Temp, Wind_Speed) {
  var table = d3.select("#summary-table");
  var tbody = table.select("tbody");
  var trow;
  for (var i = 0; i < 12; i++) {
    trow = tbody.append("tr");
    trow.append("td").text(City_ID[i]);
    trow.append("td").text(City[i]);
    trow.append("td").text(Cloudiness[i]);
    trow.append("td").text(Country[i]);
    trow.append("td").text(Date[i]);
    trow.append("td").text(Humidity[i]);
    trow.append("td").text(Lat[i]);
    trow.append("td").text(Lng[i]);
    trow.append("td").text(Max_Temp[i]);
    trow.append("td").text(Wind_Speed[i]);
  }
}

    Plotly.newPlot("plot", data, layout);

  });
}

buildPlot();
