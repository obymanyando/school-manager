/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext, useEffect, useState} from 'react'
import '../../../assets/styles/material.css';
import {MaterialsContext} from "../../../contexts/MaterialsContext";

function Material() {
    const { materials, dispatch, loading, loadMaterials } = useContext(MaterialsContext);
    const [value, setValue] = useState('');
    useEffect(() => {
        loadMaterials();
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (value === '') {
            loadMaterials();
        }
        const newArr = materials.filter(item => item.fields.title.toLowerCase().includes(value.toLowerCase()));
        console.log(value);
        console.log(newArr);
    
        dispatch({ type: 'FIND_MATERIALS_BY_SEARCH', materials: newArr })
    }

    return (
            <section className="slider_area_3 bg_cover d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2 className="main_title">Hơn <span>1000+</span> tài liệu luyện tập tiếng Anh</h2>
                                <div className="header_bottom_wrapper">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3">
                                        </div>
                                        <div className="col-lg-6">
                                            <form onSubmit={onSubmitHandler} className="header_search">
                                                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Tìm nhanh" />
                                                <button><i className="fa fa-search" /></button>
                                            </form>
                                        </div>
                                        <div className="col-lg-3">
                                        </div>
                                    </div>
                                </div>   
                                
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <div className="slider_box_wrapper d-flex flex-wrap justify-content-between">
                                    {materials.map((item) => {
                                        return <div key={item.sys.id}className="single_column">
                                            <div className={`single_box ${item.fields.boxColor}`}>
                                                <img src={item.fields.iconImg.fields.file.url} alt="icon" />
                                                <p>{item.fields.title}</p>
                                                <a href="#" />
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </section>

    )
}

export default Material
