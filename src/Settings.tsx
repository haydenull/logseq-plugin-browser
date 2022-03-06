import { Button, Form, Input, Tooltip } from 'antd'
import { QuestionCircleOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

const labelCol = { span: 3}

type IButtonConfig = {
  key: string
  icon: string
  href: string
  style?: string
}

const test = {
  "buttons": [
    {
      "key": "dida",
      "icon": "ti-window",
      "href": "https://dida365.com/webapp/#q/all/today",
      "style": {
        "width": "80%",
        "height": "80%"
      }
    },
    {
      "key": "translate",
      "icon": "ti-alien",
      "href": "https://translate.google.cn"
    }
  ]
}

const Settings: React.FC<{}> = () => {

  const initialValues = logseq.settings
  const _initialValues = {
    buttons: Array.isArray(initialValues?.buttons) ? initialValues?.buttons.map(item => ({ ...item, style: item.style ? JSON.stringify(item.style) : undefined })) : [],
    // buttons: test?.buttons.map(item => ({ ...item, style: item.style ? JSON.stringify(item.style) : undefined })) || [],
  }
  console.log('[faiz:] === initialValues', _initialValues)

  const [form] = Form.useForm<{
    buttons: IButtonConfig[]
  }>()

  const onClickSave = () => {
    form.validateFields()
      .then(values => {
        console.log('[faiz:] === form.validateFields', values)
        logseq.updateSettings({ buttons: 1 })
        const newConfig = { buttons: values.buttons.map(item => ({...item, style: item?.style ? JSON.parse(item?.style) : undefined})) }
        console.log('[faiz:] === newConfig', newConfig)
        logseq.updateSettings(newConfig)
        logseq.hideMainUI()
      })
  }

  return (
    <>
      <div className="mask bg-black opacity-60" onClick={() => logseq.hideMainUI()}></div>
      <div className="rounded shadow-lg w-4/5 h-4/5 page-center flex justify-center overflow-auto bg-white pt-16">
        <Form
          labelCol={{ span: 3 }}
          style={{ width: 600 }}
          form={form}
          initialValues={_initialValues}
        >
          <Form.List name="buttons">
            {(fields, { add, remove }) => {
              return (<>
                  {fields.map((field, index) => (
                    <Form.Item label={`Button ${index + 1}`} key={field.key} >
                      <div className="border-2 border-dashed border-gray-300 p-3">
                        <Form.Item name={[field.name, 'key']} label="Key" labelCol={labelCol} rules={[{required: true}]}>
                          <Input />
                        </Form.Item>
                        <Form.Item label="Icon" labelCol={labelCol} required>
                          <div className="flex items-center">
                            <Form.Item name={[field.name, 'icon']} rules={[{required: true}]} noStyle>
                              <Input />
                            </Form.Item>
                            <Tooltip title="View tablericons">
                              <QuestionCircleOutlined className="ml-1" onClick={() => logseq.App.openExternalLink('https://tablericons.com')} />
                            </Tooltip>
                          </div>
                        </Form.Item>
                        <Form.Item name={[field.name, 'href']} label="Url" labelCol={labelCol} rules={[{required: true, type: 'url'}]}>
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name={[field.name, 'style']}
                          label="Style"
                          labelCol={labelCol}
                          rules={[{
                            validator: (_, value) => {
                              if (value) {
                                if (!/^{/.test(value)) return Promise.reject(new Error('Should be a json string'))
                                try {
                                  JSON.parse(value)
                                  return Promise.resolve()
                                } catch (error) {
                                  return Promise.reject(new Error('Invalid JSON'))
                                }
                              }
                              return Promise.resolve()
                            },
                          }]}
                        >
                          <Input.TextArea />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(field.name)} className="absolute right-3 bottom-3" />
                      </div>
                    </Form.Item>
                  ))}
                  <Form.Item wrapperCol={{ offset: 3 }}>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Add New Button
                    </Button>
                  </Form.Item>
                </>
              )
            }}
          </Form.List>
          <Form.Item  wrapperCol={{ offset: 3 }}>
            <Button onClick={() => logseq.hideMainUI()} className="mr-4 mb-16">
              Cancel
            </Button>
            <Button type="primary" onClick={onClickSave}>
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Settings
