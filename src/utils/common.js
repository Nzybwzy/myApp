/**
 * Created by nap on 17/8/10.
 */
import _ from 'underscore';
const storage = localStorage;

const getValue = (key) => {
    let v = storage.getItem(key);
    try {
        v = JSON.parse(v);
        return v;
    } catch (e) {
        return v;
    }
};


export const Storage = {
    
    setItem(key, value){
        
        let v = getValue(key);
        
        if (_.isObject(value) || _.isArray(value)) {
            storage.setItem(key, JSON.stringify({...v, ...value}));
        } else {
            storage.setItem(key, value);
        }
    },
    
    getItem: getValue,
    
    removeItem(key){
        storage.removeItem(key);
    },
    
    clear(){
        storage.clear();
    }
};


export const getOptions = (opt) => {
    return _.map(opt, (v, k) => {
        return {
            uuid: k,
            name: v
        };
    });
};

export const getPickerDatas = (opt) => {
    return _.map(opt, (v, k) => {
        return {
            value: k,
            label: v
        };
    });
};


export const getOptionsValue = (k, opts) => {  //用于供求信息详情的各类_id转化为中文的方法
    return opts[k] || '';
};


export const getMultipleValue = (values, opts) => {
    let result = [];
    //console.log(values, opts);
    const getValue = (k, os) => {
        os = os || [];
        for (let i = 0; i < os.length; i++) {
            if (os[i].value === k) {
                return os[i];
            }
        }
        return null;
    };
    
    let opt = [...opts];
    for (let i = 0; i < values.length; i++) {
        opt = getValue(values[i], opt);
        if (opt === null) {
            result.push(values[i]);
        } else {
            result.push(opt.label);
            opt = opt.children;
        }
    }
    
    return result.join('/');
    
};


//修改页面title
export const changeTitle = (title) => {
    document.querySelector('title').innerText = title;
    
    setTimeout(function () {
        
        document.title = title;
        const i = document.createElement('iframe');
        i.src = 'js/font.js?' + Math.random();
        i.style.display = 'none';
        
        i.onload = i.onerror = function () {
            setTimeout(function () {
                i.remove();
            }, 9)
        };
        
        document.body.appendChild(i);
    }, 0);
    
};
