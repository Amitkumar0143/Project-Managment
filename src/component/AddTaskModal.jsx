import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Modal, Input, Button, Form } from "antd";
const { TextArea } = Input;

const AddTaskModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

    const handleOk = () => {
      setIsModalVisible(false);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

  return (
    <>
      <FaPlus onClick={showModal} />

      <Modal
        footer={false}
        className="information"
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <div className="Feild ">
          <label>Task Title</label>
          <Form.Item
            name="Task Tite"
            rules={[{ required: true, message: "Please enter task name!" }]}
          >
            <Input />
          </Form.Item>


          </div>
          <div className="Feild ">
          <label>Discription</label>
          <Form.Item
            className='className="Feild'
            name="Discription"
            rules={[{ required: true, message: "Please enter discription!" }]}
          >
            <TextArea
              showCount
              maxLength={100}
              style={{
                height: 120,
              }}
            />
          </Form.Item>
          </div>

          <Form.Item >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddTaskModal;
