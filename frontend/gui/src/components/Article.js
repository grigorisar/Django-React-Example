import React from 'react';
import { List, Icon } from 'antd';



const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

const Articles = (props) => {
    return (
        <List
            //set the layout to vertical
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}

            dataSource={props.data} //specify the data source 
            // render each item 
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                        //random design icons
                        <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                        <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                        <IconText type="message" text="2" key="list-vertical-message" />,
                    ]}                
                >
                    <List.Item.Meta //item titles are clickable
                        title={<a href={`articles/${item.id}`}>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    )
}

export default Articles;
