var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: 'Created By Amir Hadian',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Hozeh07_1403_1 = new ol.format.GeoJSON();
var features_Hozeh07_1403_1 = format_Hozeh07_1403_1.readFeatures(json_Hozeh07_1403_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hozeh07_1403_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hozeh07_1403_1.addFeatures(features_Hozeh07_1403_1);
var lyr_Hozeh07_1403_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hozeh07_1403_1, 
                style: style_Hozeh07_1403_1,
                popuplayertitle: "Hozeh07_1403",
                interactive: true,
                title: '<img src="styles/legend/Hozeh07_1403_1.png" /> Hozeh07_1403'
            });
var format_Abadi07_1403_2 = new ol.format.GeoJSON();
var features_Abadi07_1403_2 = format_Abadi07_1403_2.readFeatures(json_Abadi07_1403_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Abadi07_1403_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Abadi07_1403_2.addFeatures(features_Abadi07_1403_2);
var lyr_Abadi07_1403_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Abadi07_1403_2, 
                style: style_Abadi07_1403_2,
                popuplayertitle: "Abadi07_1403",
                interactive: true,
                title: '<img src="styles/legend/Abadi07_1403_2.png" /> Abadi07_1403'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Hozeh07_1403_1.setVisible(true);lyr_Abadi07_1403_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Hozeh07_1403_1,lyr_Abadi07_1403_2];
lyr_Hozeh07_1403_1.set('fieldAliases', {'ADRES1403': 'ADRES1403', 'HOZE1403': 'HOZE1403', 'HOZE_M1403': 'HOZE_M1403', 'GROUP1403': 'GROUP1403', 'GROUPM1403': 'GROUPM1403', 'MANTAQ1403': 'MANTAQ1403', 'VALUE': 'VALUE', 'COUNT': 'COUNT', });
lyr_Abadi07_1403_2.set('fieldAliases', {'Name': 'Name', 'Value': 'Value', 'X': 'X', 'Y': 'Y', 'YX': 'YX', });
lyr_Hozeh07_1403_1.set('fieldImages', {'ADRES1403': 'TextEdit', 'HOZE1403': 'TextEdit', 'HOZE_M1403': 'TextEdit', 'GROUP1403': 'TextEdit', 'GROUPM1403': 'TextEdit', 'MANTAQ1403': 'TextEdit', 'VALUE': 'TextEdit', 'COUNT': 'Range', });
lyr_Abadi07_1403_2.set('fieldImages', {'Name': 'TextEdit', 'Value': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'YX': 'TextEdit', });
lyr_Hozeh07_1403_1.set('fieldLabels', {'ADRES1403': 'hidden field', 'HOZE1403': 'inline label - always visible', 'HOZE_M1403': 'hidden field', 'GROUP1403': 'hidden field', 'GROUPM1403': 'hidden field', 'MANTAQ1403': 'hidden field', 'VALUE': 'inline label - always visible', 'COUNT': 'hidden field', });
lyr_Abadi07_1403_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Value': 'hidden field', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'YX': 'inline label - always visible', });
lyr_Abadi07_1403_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});