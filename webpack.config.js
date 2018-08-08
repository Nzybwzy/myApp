/**
 * Created by nap on 17/5/22.
 */


export default (config) => {
    
    const svgDirs = [
        require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
        // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
    ];
    
    // if (process.env.NODE_ENV === 'development') {
        
    //     const loaders = config.module.loaders;
        
    //     for (let i = 2; i <= 5; i++) {
            
    //         const loader = loaders[i].loader.split('!');
            
    //         const result = loader.map(item => {
    //             const load = item.split('?');
                
    //             if (load[0] === 'css' || load[0] === 'less') {
    //                 if (load.length === 1) {
    //                     load.push('sourceMap');
    //                 } else {
    //                     if (load[0] === 'less') {
    //                         load[1] = JSON.stringify({...JSON.parse(load[1]), sourceMap: true});
    //                     } else {
    //                         load[1] += '&sourceMap';
    //                     }
    //                 }
    //             }
                
    //             return load.join('?');
    //         });
            
    //         loaders[i].loader = result.join('!');
    //     }
    // }
    
    // const old_svg = config.module.loaders.pop();
    
    // config.module.loaders.push(
    //     {
    //         test   : /\.(svg)$/i,
    //         loader : 'svg-sprite',
    //         include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
    //     }
    // );
    
    //config.module.loaders.push(old_svg);
    
    return config;
};