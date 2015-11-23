var SP=String.prototype;
SP.trim=SP.trim||(function(p){return function(){return this.replace(p,'');};})(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g);
