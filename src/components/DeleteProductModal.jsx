import { useEffect, useRef } from "react";
import axios from "axios";
import { Modal } from 'bootstrap';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

function DeleteProductModal({
    tempProduct,
    isOpen,
    setIsOpen,
    getProducts
}) {

    const deleteProductModalRef = useRef(null);

    useEffect(()=>{     
      new Modal(deleteProductModalRef.current,{
         backdrop:false 
      })
      // Modal.getInstance(productModalRef.current)
      // console.log(Modal.getInstance(productModalRef.current));  
      },[])
    useEffect(()=>{
        if(isOpen){
            const modalInstance = Modal.getInstance(deleteProductModalRef.current);
            modalInstance.show();
        }
    },[isOpen])

     const handleCloseDeleteProductModal = () => {
          const modalInstance = Modal.getInstance(deleteProductModalRef.current);
          modalInstance.hide();
            setIsOpen(false);

        }
    
        //刪除產品
        
     const deleteProduct = async () => {
            try {
            await axios.delete(`${BASE_URL}/v2/api/${API_PATH}/admin/product/${tempProduct.id}`)
            } catch (error) {
            alert('刪除產品失敗');
            }
        }

    const handleDeleteProduct = async () =>{
        try {
          await deleteProduct()
          getProducts();
          handleCloseDeleteProductModal();
        } catch (error) {
          alert('刪除產品失敗')
        }
      }  
      
    
    return(
        <div
        ref={deleteProductModalRef}
        className="modal fade"
        id="delProductModal"
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">刪除產品</h1>
              <button
              onClick={handleCloseDeleteProductModal}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              你是否要刪除 
              <span className="text-danger fw-bold">{tempProduct.title}</span>
            </div>
            <div className="modal-footer">
              <button
              onClick={handleCloseDeleteProductModal}
                type="button"
                className="btn btn-secondary"
              >
                取消
              </button>
              <button onClick={handleDeleteProduct} type="button" className="btn btn-danger">
                刪除
              </button>
            </div>
          </div>
        </div>
        </div>
    )
}

export default DeleteProductModal