ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:28191").setExtent([27576.275003, 69463.252428, 264828.150245, 219667.210915]);
var wms_layers = [];

var lyr_ABD_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "ABD",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ABD_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3901224.171635, 3794239.683515, 3901526.294224, 3794624.560643]
                            })
                        });

        var lyr_BingVirtualEarth_1 = new ol.layer.Tile({
            'title': 'Bing Virtual Earth',
            'type': 'base',
            'opacity': 0.714000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_HilshadeUNDPQalqilyatifcopy_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hilshade-UNDP-Qalqilya.tif copy",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HilshadeUNDPQalqilyatifcopy_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3890631.664268, 3784678.493504, 3911380.380469, 3796482.721890]
                            })
                        });
var lyr_FilledUNDPQalqilya_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Filled-UNDP-Qalqilya",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FilledUNDPQalqilya_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3890418.478377, 3784273.485329, 3911614.351375, 3796879.559937]
                            })
                        });

        var lyr_OSMStandard_5 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_clippedstrahlerqalq_6 = new ol.format.GeoJSON();
var features_clippedstrahlerqalq_6 = format_clippedstrahlerqalq_6.readFeatures(json_clippedstrahlerqalq_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_clippedstrahlerqalq_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedstrahlerqalq_6.addFeatures(features_clippedstrahlerqalq_6);
var lyr_clippedstrahlerqalq_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_clippedstrahlerqalq_6, 
                style: style_clippedstrahlerqalq_6,
                interactive: true,
                title: '<img src="styles/legend/clippedstrahlerqalq_6.png" /> clipped-strahler-qalq'
            });
var format_VectorUNDPQalqilya_7 = new ol.format.GeoJSON();
var features_VectorUNDPQalqilya_7 = format_VectorUNDPQalqilya_7.readFeatures(json_VectorUNDPQalqilya_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_VectorUNDPQalqilya_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorUNDPQalqilya_7.addFeatures(features_VectorUNDPQalqilya_7);
var lyr_VectorUNDPQalqilya_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorUNDPQalqilya_7, 
                style: style_VectorUNDPQalqilya_7,
                interactive: true,
                title: '<img src="styles/legend/VectorUNDPQalqilya_7.png" /> Vector-UNDP-Qalqilya'
            });
var format_channelsUNDPQalqilya_8 = new ol.format.GeoJSON();
var features_channelsUNDPQalqilya_8 = format_channelsUNDPQalqilya_8.readFeatures(json_channelsUNDPQalqilya_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_channelsUNDPQalqilya_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_channelsUNDPQalqilya_8.addFeatures(features_channelsUNDPQalqilya_8);
var lyr_channelsUNDPQalqilya_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_channelsUNDPQalqilya_8, 
                style: style_channelsUNDPQalqilya_8,
                interactive: true,
                title: '<img src="styles/legend/channelsUNDPQalqilya_8.png" /> channels-UNDP-Qalqilya'
            });
var format_CLIPPEDUNDPQalqiyacatchmentvector_9 = new ol.format.GeoJSON();
var features_CLIPPEDUNDPQalqiyacatchmentvector_9 = format_CLIPPEDUNDPQalqiyacatchmentvector_9.readFeatures(json_CLIPPEDUNDPQalqiyacatchmentvector_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_CLIPPEDUNDPQalqiyacatchmentvector_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLIPPEDUNDPQalqiyacatchmentvector_9.addFeatures(features_CLIPPEDUNDPQalqiyacatchmentvector_9);
var lyr_CLIPPEDUNDPQalqiyacatchmentvector_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CLIPPEDUNDPQalqiyacatchmentvector_9, 
                style: style_CLIPPEDUNDPQalqiyacatchmentvector_9,
                interactive: true,
                title: '<img src="styles/legend/CLIPPEDUNDPQalqiyacatchmentvector_9.png" /> CLIPPED-UNDP-Qalqiya-catchment-vector'
            });
var format_ContourQalqilya_10 = new ol.format.GeoJSON();
var features_ContourQalqilya_10 = format_ContourQalqilya_10.readFeatures(json_ContourQalqilya_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_ContourQalqilya_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourQalqilya_10.addFeatures(features_ContourQalqilya_10);
var lyr_ContourQalqilya_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContourQalqilya_10, 
                style: style_ContourQalqilya_10,
                interactive: true,
                title: '<img src="styles/legend/ContourQalqilya_10.png" /> Contour-Qalqilya'
            });
var format_AreaABC_11 = new ol.format.GeoJSON();
var features_AreaABC_11 = format_AreaABC_11.readFeatures(json_AreaABC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_AreaABC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaABC_11.addFeatures(features_AreaABC_11);
var lyr_AreaABC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaABC_11, 
                style: style_AreaABC_11,
                interactive: true,
    title: 'Area-A-B-C<br />\
    <img src="styles/legend/AreaABC_11_0.png" /> Area A<br />\
    <img src="styles/legend/AreaABC_11_1.png" /> Area B<br />\
    <img src="styles/legend/AreaABC_11_2.png" /> Area C<br />\
    <img src="styles/legend/AreaABC_11_3.png" /> Area H1<br />\
    <img src="styles/legend/AreaABC_11_4.png" /> Area H2<br />\
    <img src="styles/legend/AreaABC_11_5.png" /> Natural Reserves<br />\
    <img src="styles/legend/AreaABC_11_6.png" /> <br />'
        });
var format_Districts_12 = new ol.format.GeoJSON();
var features_Districts_12 = format_Districts_12.readFeatures(json_Districts_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_Districts_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districts_12.addFeatures(features_Districts_12);
var lyr_Districts_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Districts_12, 
                style: style_Districts_12,
                interactive: true,
    title: 'Districts<br />\
    <img src="styles/legend/Districts_12_0.png" /> Bethlehem<br />\
    <img src="styles/legend/Districts_12_1.png" /> Hebron<br />\
    <img src="styles/legend/Districts_12_2.png" /> Jenin<br />\
    <img src="styles/legend/Districts_12_3.png" /> Jericho<br />\
    <img src="styles/legend/Districts_12_4.png" /> Jerusalem<br />\
    <img src="styles/legend/Districts_12_5.png" /> Nablus<br />\
    <img src="styles/legend/Districts_12_6.png" /> Qalqiliya<br />\
    <img src="styles/legend/Districts_12_7.png" /> Ramallah and Al-Bireh<br />\
    <img src="styles/legend/Districts_12_8.png" /> Salfit<br />\
    <img src="styles/legend/Districts_12_9.png" /> Tubas<br />\
    <img src="styles/legend/Districts_12_10.png" /> Tulkarm<br />'
        });
var format_WestBankGazaBorder_13 = new ol.format.GeoJSON();
var features_WestBankGazaBorder_13 = format_WestBankGazaBorder_13.readFeatures(json_WestBankGazaBorder_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_WestBankGazaBorder_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WestBankGazaBorder_13.addFeatures(features_WestBankGazaBorder_13);
var lyr_WestBankGazaBorder_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WestBankGazaBorder_13, 
                style: style_WestBankGazaBorder_13,
                interactive: true,
                title: '<img src="styles/legend/WestBankGazaBorder_13.png" /> West Bank-Gaza-Border'
            });
var format_GroumdwaterWells_14 = new ol.format.GeoJSON();
var features_GroumdwaterWells_14 = format_GroumdwaterWells_14.readFeatures(json_GroumdwaterWells_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_GroumdwaterWells_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroumdwaterWells_14.addFeatures(features_GroumdwaterWells_14);
var lyr_GroumdwaterWells_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroumdwaterWells_14, 
                style: style_GroumdwaterWells_14,
                interactive: true,
                title: '<img src="styles/legend/GroumdwaterWells_14.png" /> Groumdwater Wells'
            });
var format_TankNewLocation_15 = new ol.format.GeoJSON();
var features_TankNewLocation_15 = format_TankNewLocation_15.readFeatures(json_TankNewLocation_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_TankNewLocation_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TankNewLocation_15.addFeatures(features_TankNewLocation_15);
var lyr_TankNewLocation_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TankNewLocation_15, 
                style: style_TankNewLocation_15,
                interactive: true,
                title: '<img src="styles/legend/TankNewLocation_15.png" /> Tank-New Location'
            });
var format_WBuffer_16 = new ol.format.GeoJSON();
var features_WBuffer_16 = format_WBuffer_16.readFeatures(json_WBuffer_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_WBuffer_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBuffer_16.addFeatures(features_WBuffer_16);
var lyr_WBuffer_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WBuffer_16, 
                style: style_WBuffer_16,
                interactive: true,
                title: '<img src="styles/legend/WBuffer_16.png" /> W-Buffer'
            });
var format_WallQalqilya_17 = new ol.format.GeoJSON();
var features_WallQalqilya_17 = format_WallQalqilya_17.readFeatures(json_WallQalqilya_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_WallQalqilya_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WallQalqilya_17.addFeatures(features_WallQalqilya_17);
var lyr_WallQalqilya_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WallQalqilya_17, 
                style: style_WallQalqilya_17,
                interactive: true,
                title: '<img src="styles/legend/WallQalqilya_17.png" /> Wall-Qalqilya'
            });
var format_RoadsBuffer_18 = new ol.format.GeoJSON();
var features_RoadsBuffer_18 = format_RoadsBuffer_18.readFeatures(json_RoadsBuffer_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_RoadsBuffer_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadsBuffer_18.addFeatures(features_RoadsBuffer_18);
var lyr_RoadsBuffer_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoadsBuffer_18, 
                style: style_RoadsBuffer_18,
                interactive: true,
                title: '<img src="styles/legend/RoadsBuffer_18.png" /> Roads  Buffer'
            });
var format_DirtRoads_19 = new ol.format.GeoJSON();
var features_DirtRoads_19 = format_DirtRoads_19.readFeatures(json_DirtRoads_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_DirtRoads_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirtRoads_19.addFeatures(features_DirtRoads_19);
var lyr_DirtRoads_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirtRoads_19, 
                style: style_DirtRoads_19,
                interactive: true,
                title: '<img src="styles/legend/DirtRoads_19.png" /> Dirt Roads'
            });
var format_Tragetarea_20 = new ol.format.GeoJSON();
var features_Tragetarea_20 = format_Tragetarea_20.readFeatures(json_Tragetarea_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_Tragetarea_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tragetarea_20.addFeatures(features_Tragetarea_20);
var lyr_Tragetarea_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tragetarea_20, 
                style: style_Tragetarea_20,
                interactive: true,
                title: '<img src="styles/legend/Tragetarea_20.png" /> Traget area'
            });
var format_Workallpipesm_21 = new ol.format.GeoJSON();
var features_Workallpipesm_21 = format_Workallpipesm_21.readFeatures(json_Workallpipesm_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_Workallpipesm_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Workallpipesm_21.addFeatures(features_Workallpipesm_21);
var lyr_Workallpipesm_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Workallpipesm_21, 
                style: style_Workallpipesm_21,
                interactive: true,
                title: '<img src="styles/legend/Workallpipesm_21.png" /> Work all pipes-m'
            });
var format_WorklandParcels_22 = new ol.format.GeoJSON();
var features_WorklandParcels_22 = format_WorklandParcels_22.readFeatures(json_WorklandParcels_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_WorklandParcels_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorklandParcels_22.addFeatures(features_WorklandParcels_22);
var lyr_WorklandParcels_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WorklandParcels_22, 
                style: style_WorklandParcels_22,
                interactive: true,
    title: 'Workland Parcels<br />\
    <img src="styles/legend/WorklandParcels_22_0.png" /> Al-Adas-<br />\
    <img src="styles/legend/WorklandParcels_22_1.png" /> Al-Stooh<br />\
    <img src="styles/legend/WorklandParcels_22_2.png" /> Moroj<br />'
        });
var format_PipesPhase1_23 = new ol.format.GeoJSON();
var features_PipesPhase1_23 = format_PipesPhase1_23.readFeatures(json_PipesPhase1_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_PipesPhase1_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PipesPhase1_23.addFeatures(features_PipesPhase1_23);
var lyr_PipesPhase1_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PipesPhase1_23, 
                style: style_PipesPhase1_23,
                interactive: true,
                title: '<img src="styles/legend/PipesPhase1_23.png" /> Pipes Phase 1'
            });
var format_Lables_24 = new ol.format.GeoJSON();
var features_Lables_24 = format_Lables_24.readFeatures(json_Lables_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_Lables_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lables_24.addFeatures(features_Lables_24);
var lyr_Lables_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lables_24, 
                style: style_Lables_24,
                interactive: true,
                title: '<img src="styles/legend/Lables_24.png" /> Lables'
            });
var lyr_logo_25 = new ol.layer.Image({
                            opacity: 1,
                            title: "logo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/logo_25.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3880932.573511, 3776098.806049, 3917541.338519, 3814303.305547]
                            })
                        });
var group_WaterActivity = new ol.layer.Group({
                                layers: [lyr_ABD_0,lyr_BingVirtualEarth_1,lyr_GoogleSatelliteHybrid_2,lyr_HilshadeUNDPQalqilyatifcopy_3,lyr_FilledUNDPQalqilya_4,lyr_OSMStandard_5,lyr_clippedstrahlerqalq_6,lyr_VectorUNDPQalqilya_7,lyr_channelsUNDPQalqilya_8,lyr_CLIPPEDUNDPQalqiyacatchmentvector_9,lyr_ContourQalqilya_10,lyr_AreaABC_11,lyr_Districts_12,lyr_WestBankGazaBorder_13,lyr_GroumdwaterWells_14,lyr_TankNewLocation_15,lyr_WBuffer_16,lyr_WallQalqilya_17,lyr_RoadsBuffer_18,lyr_DirtRoads_19,lyr_Tragetarea_20,lyr_Workallpipesm_21,lyr_WorklandParcels_22,lyr_PipesPhase1_23,lyr_Lables_24,lyr_logo_25,],
                                title: "Water Activity"});

lyr_ABD_0.setVisible(true);lyr_BingVirtualEarth_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_HilshadeUNDPQalqilyatifcopy_3.setVisible(true);lyr_FilledUNDPQalqilya_4.setVisible(true);lyr_OSMStandard_5.setVisible(true);lyr_clippedstrahlerqalq_6.setVisible(true);lyr_VectorUNDPQalqilya_7.setVisible(true);lyr_channelsUNDPQalqilya_8.setVisible(true);lyr_CLIPPEDUNDPQalqiyacatchmentvector_9.setVisible(true);lyr_ContourQalqilya_10.setVisible(true);lyr_AreaABC_11.setVisible(true);lyr_Districts_12.setVisible(true);lyr_WestBankGazaBorder_13.setVisible(true);lyr_GroumdwaterWells_14.setVisible(true);lyr_TankNewLocation_15.setVisible(true);lyr_WBuffer_16.setVisible(true);lyr_WallQalqilya_17.setVisible(true);lyr_RoadsBuffer_18.setVisible(true);lyr_DirtRoads_19.setVisible(true);lyr_Tragetarea_20.setVisible(true);lyr_Workallpipesm_21.setVisible(true);lyr_WorklandParcels_22.setVisible(true);lyr_PipesPhase1_23.setVisible(true);lyr_Lables_24.setVisible(true);lyr_logo_25.setVisible(true);
var layersList = [group_WaterActivity];
lyr_clippedstrahlerqalq_6.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_VectorUNDPQalqilya_7.set('fieldAliases', {'DN': 'DN', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_channelsUNDPQalqilya_8.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_CLIPPEDUNDPQalqiyacatchmentvector_9.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_ContourQalqilya_10.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_AreaABC_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LandClassi': 'LandClassi', 'LandClas_1': 'LandClas_1', 'LandClas_2': 'LandClas_2', 'LandClas_3': 'LandClas_3', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Districts_12.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'TEST': 'TEST', 'SUMID': 'SUMID', 'SUMAREA': 'SUMAREA', 'SUMAREA1': 'SUMAREA1', 'SUMPERIMET': 'SUMPERIMET', 'SUMDIST_ID': 'SUMDIST_ID', 'SUMSUBREG_': 'SUMSUBREG_', 'SUMVILLAGE': 'SUMVILLAGE', 'SUMTRAFFIC': 'SUMTRAFFIC', 'SUMPCBS_ID': 'SUMPCBS_ID', 'SUMTEST': 'SUMTEST', 'ENAME': 'ENAME', 'N-Name': 'N-Name', });
lyr_WestBankGazaBorder_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Area': 'Area', 'Location': 'Location', });
lyr_GroumdwaterWells_14.set('fieldAliases', {'id': 'id', 'Well Name': 'Well Name', 'Well Id': 'Well Id', 'Depth (m)': 'Depth (m)', '(m3/hr)': '(m3/hr)', 'X-coord': 'X-coord', 'Y-Coord': 'Y-Coord', 'No.Farmers': 'No.Farmers', 'Area(dun)': 'Area(dun)', });
lyr_TankNewLocation_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Size (m3)': 'Size (m3)', });
lyr_WBuffer_16.set('fieldAliases', {'id': 'id', 'Length': 'Length', });
lyr_WallQalqilya_17.set('fieldAliases', {'id': 'id', 'Length': 'Length', 'Name': 'Name', });
lyr_RoadsBuffer_18.set('fieldAliases', {'id': 'id', 'Road Name': 'Road Name', 'Class': 'Class', 'Status': 'Status', 'Main Work': 'Main Work', 'Length (m)': 'Length (m)', });
lyr_DirtRoads_19.set('fieldAliases', {'id': 'id', 'Road Name': 'Road Name', 'Class': 'Class', 'Status': 'Status', 'Main Work': 'Main Work', 'Length (m)': 'Length (m)', });
lyr_Tragetarea_20.set('fieldAliases', {'id': 'id', 'Target': 'Target', });
lyr_Workallpipesm_21.set('fieldAliases', {'Segment': 'Segment', 'X': 'X', 'Y': 'Y', 'Length': 'Length', 'Name': 'Name', 'layer': 'layer', 'path': 'path', });
lyr_WorklandParcels_22.set('fieldAliases', {'symbolId': 'symbolId', 'Name': 'Name', 'Area (dun)': 'Area (dun)', });
lyr_PipesPhase1_23.set('fieldAliases', {'Segment': 'Segment', 'X': 'X', 'Y': 'Y', 'Length': 'Length', 'Name': 'Name', 'layer': 'layer', 'path': 'path', });
lyr_Lables_24.set('fieldAliases', {'id': 'id', 'Lables': 'Lables', 'X-coord': 'X-coord', 'Y-Coord': 'Y-Coord', 'PHOTOS': 'phg-PHOTOS', });
lyr_clippedstrahlerqalq_6.set('fieldImages', {'SEGMENT_ID': '', 'NODE_A': '', 'NODE_B': '', 'BASIN': '', 'ORDER': '', 'ORDER_CELL': '', 'LENGTH': '', });
lyr_VectorUNDPQalqilya_7.set('fieldImages', {'DN': 'Range', 'AREA': 'Range', 'PERIMETER': 'Range', });
lyr_channelsUNDPQalqilya_8.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_CLIPPEDUNDPQalqiyacatchmentvector_9.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_ContourQalqilya_10.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_AreaABC_11.set('fieldImages', {'OBJECTID': 'Range', 'LandClassi': 'TextEdit', 'LandClas_1': 'TextEdit', 'LandClas_2': 'TextEdit', 'LandClas_3': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Districts_12.set('fieldImages', {'ID': 'TextEdit', 'AREA': 'TextEdit', 'TEST': 'TextEdit', 'SUMID': 'TextEdit', 'SUMAREA': 'TextEdit', 'SUMAREA1': 'TextEdit', 'SUMPERIMET': 'TextEdit', 'SUMDIST_ID': 'TextEdit', 'SUMSUBREG_': 'TextEdit', 'SUMVILLAGE': 'TextEdit', 'SUMTRAFFIC': 'TextEdit', 'SUMPCBS_ID': 'TextEdit', 'SUMTEST': 'TextEdit', 'ENAME': 'TextEdit', 'N-Name': 'TextEdit', });
lyr_WestBankGazaBorder_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Area': 'TextEdit', 'Location': 'TextEdit', });
lyr_GroumdwaterWells_14.set('fieldImages', {'id': 'TextEdit', 'Well Name': 'TextEdit', 'Well Id': 'TextEdit', 'Depth (m)': 'TextEdit', '(m3/hr)': 'TextEdit', 'X-coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'No.Farmers': 'TextEdit', 'Area(dun)': 'TextEdit', });
lyr_TankNewLocation_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Size (m3)': 'TextEdit', });
lyr_WBuffer_16.set('fieldImages', {'id': 'TextEdit', 'Length': 'TextEdit', });
lyr_WallQalqilya_17.set('fieldImages', {'id': 'TextEdit', 'Length': 'TextEdit', 'Name': 'TextEdit', });
lyr_RoadsBuffer_18.set('fieldImages', {'id': 'TextEdit', 'Road Name': 'TextEdit', 'Class': 'TextEdit', 'Status': 'TextEdit', 'Main Work': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_DirtRoads_19.set('fieldImages', {'id': 'TextEdit', 'Road Name': 'TextEdit', 'Class': 'TextEdit', 'Status': 'TextEdit', 'Main Work': 'TextEdit', 'Length (m)': 'Range', });
lyr_Tragetarea_20.set('fieldImages', {'id': 'TextEdit', 'Target': 'TextEdit', });
lyr_Workallpipesm_21.set('fieldImages', {'Segment': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Length': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_WorklandParcels_22.set('fieldImages', {'symbolId': 'TextEdit', 'Name': 'TextEdit', 'Area (dun)': 'TextEdit', });
lyr_PipesPhase1_23.set('fieldImages', {'Segment': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Length': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Lables_24.set('fieldImages', {'id': 'TextEdit', 'Lables': 'TextEdit', 'X-coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'PHOTOS': 'ExternalResource', });
lyr_clippedstrahlerqalq_6.set('fieldLabels', {});
lyr_VectorUNDPQalqilya_7.set('fieldLabels', {});
lyr_channelsUNDPQalqilya_8.set('fieldLabels', {});
lyr_CLIPPEDUNDPQalqiyacatchmentvector_9.set('fieldLabels', {});
lyr_ContourQalqilya_10.set('fieldLabels', {});
lyr_AreaABC_11.set('fieldLabels', {});
lyr_Districts_12.set('fieldLabels', {});
lyr_WestBankGazaBorder_13.set('fieldLabels', {});
lyr_GroumdwaterWells_14.set('fieldLabels', {});
lyr_TankNewLocation_15.set('fieldLabels', {});
lyr_WBuffer_16.set('fieldLabels', {});
lyr_WallQalqilya_17.set('fieldLabels', {});
lyr_RoadsBuffer_18.set('fieldLabels', {});
lyr_DirtRoads_19.set('fieldLabels', {});
lyr_Tragetarea_20.set('fieldLabels', {});
lyr_Workallpipesm_21.set('fieldLabels', {});
lyr_WorklandParcels_22.set('fieldLabels', {});
lyr_PipesPhase1_23.set('fieldLabels', {});
lyr_Lables_24.set('fieldLabels', {});
lyr_Lables_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});