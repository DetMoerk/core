import{_ as p,p as l,k as m,l as c,A as t,L as o,u as a,q as f,x as g}from"./vendor-59c39d33.js";import"./vendor-sortablejs-1a35b5ad.js";const v={name:"VehicleSocKia",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},vehicleId:{required:!0}},data(){return{}},methods:{updateConfiguration(d,e=void 0){this.$emit("update:configuration",{value:d,object:e})}}},_={class:"vehicle-soc-kia"},b={class:"small"};function h(d,e,i,w,V,r){const s=l("openwb-base-heading"),u=l("openwb-base-text-input");return m(),c("div",_,[t(s,null,{default:o(()=>[a(" Einstellungen für Kia/Hyundai SoC "),f("span",b,"(Modul: "+g(d.$options.name)+")",1)]),_:1}),t(u,{title:"Benutzername",required:"",subtype:"user","model-value":i.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=n=>r.updateConfiguration(n,"configuration.user_id"))},{help:o(()=>[a(" Der Benutzername für die Anmeldung an den Servern. ")]),_:1},8,["model-value"]),t(u,{title:"Kennwort",required:"",subtype:"password","model-value":i.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=n=>r.updateConfiguration(n,"configuration.password"))},{help:o(()=>[a(" Das Passwort für die Anmeldung an den Servern. ")]),_:1},8,["model-value"]),t(u,{title:"PIN",required:"",subtype:"password","model-value":i.configuration.pin,"onUpdate:modelValue":e[2]||(e[2]=n=>r.updateConfiguration(n,"configuration.pin"))},{help:o(()=>[a(" Die PIN für die Anmeldung an den Servern. ")]),_:1},8,["model-value"]),t(u,{title:"VIN",required:"","model-value":i.configuration.vin,"onUpdate:modelValue":e[3]||(e[3]=n=>r.updateConfiguration(n,"configuration.vin"))},{help:o(()=>[a(" Die Fahrgestellnummer des Fahrzeugs. ")]),_:1},8,["model-value"])])}const x=p(v,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/kia/vehicle.vue"]]);export{x as default};
