
import Card from 'antd/lib/card';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import DatePicker from 'antd/lib/date-picker';
import Spin from 'antd/lib/spin';
import Table from 'antd/lib/table';
import CardTitle from 'components/CardTitle';
import SingleSelect, {Option} from 'components/SingleSelect';
import {useDetail} from 'core/hooks/useDetail';
import {usePagination} from 'core/hooks/usePagination';
import {notification} from 'helpers';
import path from 'path';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {withRouter} from 'react-router-dom';

import {CATEGORY_ROUTE} from 'config/route-consts';
import {Category} from 'models/Category';
import './CategoryDetail.scss';
import categoryDetailRepository from './CategoryDetailRepository';

import {CategorySearch} from 'models/CategorySearch';

function CategoryDetail(props) {
  const {
    form,
    match: {
      params: {
        id,
      },
    },
  } = props;

  const [translate] = useTranslation();
  const [pageSpinning, setPageSpinning] = useState<boolean>(false);
  const [category, loading] = useDetail<Category>(id, categoryDetailRepository.get, new Category());
  
  const [categorySearch, setCategorySearch] = useState<CategorySearch>(new CategorySearch());

  function handleSubmit() {
    form.validateFields((validationError: Error, category: Category) => {
      if (validationError) {
        return;
      }
      setPageSpinning(true);
      categoryDetailRepository.save(category)
        .subscribe(
          () => {
            notification.success({
              message: translate('categoryDetail.update.success'),
            });
            props.history.push(path.join(CATEGORY_ROUTE));
          },
          (error: Error) => {
            setPageSpinning(false);
            notification.error({
              message: translate('categoryDetail.update.error'),
              description: error.message,
            });
          },
        );
    });
  }

  function backToList() {
    props.history.push(path.join(CATEGORY_ROUTE));
  }

  return (
    <Spin spinning={pageSpinning}>
      <Card
        loading={loading}
        title={
          <CardTitle
            title={translate('categoryDetail.detail.title', {
            })}
            allowSave
            onSave={handleSubmit}
            allowCancel
            onCancel={backToList}
          />
        }>
        {form.getFieldDecorator('id', {
          initialValue: category.id,
        })(
          <Input type="hidden"/>,
        )}
        
        <Form.Item label={translate('categoryDetail.code')}>
          {form.getFieldDecorator('code', {
            initialValue: category.code,
            rules: [
              {
                required: true,
                message: translate('categoryDetail.errors.code.required'),
              },
            ],
          })(
            <Input type="text"/>,
          )}
        </Form.Item>

        <Form.Item label={translate('categoryDetail.name')}>
          {form.getFieldDecorator('code', {
            initialValue: category.name,
            rules: [
              {
                required: true,
                message: translate('categoryDetail.errors.name.required'),
              },
            ],
          })(
            <Input type="text"/>,
          )}
        </Form.Item>

        <Form.Item label={translate('categoryDetail.parentId')}>
          {form.getFieldDecorator('code', {
            initialValue: category.parentId,
            rules: [
              {
                required: true,
                message: translate('categoryDetail.errors.parentId.required'),
              },
            ],
          })(
            <Input type="text"/>,
          )}
        </Form.Item>

        <Form.Item label={translate('categoryDetail.icon')}>
          {form.getFieldDecorator('code', {
            initialValue: category.icon,
            rules: [
              {
                required: true,
                message: translate('categoryDetail.errors.icon.required'),
              },
            ],
          })(
            <Input type="text"/>,
          )}
        </Form.Item>

        
        <Form.Item label={translate('categoryDetail.parent')}>
            {
                form.getFieldDecorator(
                    'parentId', 
                    {
                        initialValue: category.parent 
                            ? category.parent.id 
                            : null,
                    }
                )
                (
                    <SingleSelect getList={categoryDetailRepository.singleListCategory}
                                  search={categorySearch}
                                  searchField="name"
                                  showSearch
                                  setSearch={setCategorySearch}>
                      {category.parent && (
                        <Option value={category.parent.id}>
                          {category.parent.name}
                        </Option>
                      )}
                    </SingleSelect>,
                )
            }
        </Form.Item>
      </Card>
    </Spin>
  );
}

export default Form.create()(withRouter(CategoryDetail));